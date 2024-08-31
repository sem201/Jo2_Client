import React, { useRef, useState } from "react";
import * as S from "./style";
import send from "../../assets/send.png";
import apiCallai from "../../api/ApiAi";
import record from "../../assets/record.png";
import recording from "../../assets/recording.png";
import { getToken } from "../../utils/auth";
import { useReissueToken } from "../../api/ApiReissue";

const ChattingBar = ({ addMessage }) => {
    const { getReissueToken } = useReissueToken();
    const textareaRef = useRef(null);
    const [isRecording, setIsRecording] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const handleReconding = async () => {
        const token = getToken();
        if (isProcessing) return;
        if (!isRecording) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorderRef.current = new MediaRecorder(stream);
                mediaRecorderRef.current.ondataavailable = (event) => {
                    audioChunksRef.current.push(event.data);
                };
                mediaRecorderRef.current.start();
                setIsRecording(true);
            } catch (error) {
                console.log(error);
            }
        } else {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
                audioChunksRef.current = [];
                setIsRecording(false);
                setIsProcessing(true);

                try {
                    const formData = new FormData();
                    formData.append("audio", audioBlob, "recording.wav", "accessToken",token);
                    console.log("formdata:", formData);

                    const response = await apiCallai('/api/chatbot/voice', "POST", formData,token);
                    const recognizedText = response.data.recognizedText;
                    const aiResponseMessage = response.data.response.response;
                    console.log('음성인식 결과:', recognizedText); // 내 음성인식 결과
                    console.log('응답:', aiResponseMessage); // GPT 응답

                    // 사용자 메시지와 AI 메시지를 상태에 추가
                    addMessage(recognizedText, 'user');
                    addMessage(aiResponseMessage, 'ai');

                    // AI 응답을 TTS로 출력
                    speakText(aiResponseMessage);
                } catch (error) {
                    console.log(error);
                    if(error.response.status === 401){
                        getReissueToken('/chat') //page마다 다르게
                    }
                } finally {
                    setIsProcessing(false);
                }
            };
        }
    };

    const speakText = (text) => {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'ko-KR';
            window.speechSynthesis.speak(speech);
        } else {
            console.error('TTS 기능을 지원하지 않는 브라우저입니다.');
        }
    };

    const handleResizeHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = '30px';
        textarea.style.height = Math.min(textarea.scrollHeight, 60) + 'px';
    };

    const sendMessage = async () => {
        const token = getToken();
        if (isProcessing) return;
        const message = textareaRef.current.value;
        if (message.trim()) {
            setIsSending(true);
            setIsProcessing(true);
            addMessage(message, 'user');
            textareaRef.current.value = '';
            handleResizeHeight();

            try {
                const response = await apiCallai('/api/chatbot/chat', "POST", { "message": message },token);
                const aiResponseMessage = response.data.response;
                
                // AI 메시지를 상태에 추가 및 TTS 실행
                addMessage(aiResponseMessage, 'ai');
                // speakText(aiResponseMessage);
            } catch (error) {
                console.log(error);
                if(error.response.status === 401){
                    getReissueToken('/chat') //page마다 다르게
                }
            } finally {
                setIsSending(false);
                setIsProcessing(false);
            }
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    return (
        <S.ChattingContainer>
            <S.recordButton onClick={handleReconding} disabled={isSending || isProcessing}>
                <S.recordimg src={isRecording ? recording : record} />
            </S.recordButton>
            <S.messageInput 
                ref={textareaRef} 
                onChange={handleResizeHeight}
                onKeyDown={handleKeyDown}
                rows="1"
                disabled={isSending || isProcessing}
            />
            <S.Button onClick={sendMessage} disabled={isSending || isProcessing}>
                <img src={send} alt="send" />
            </S.Button>
        </S.ChattingContainer>
    );
};

export default ChattingBar;
