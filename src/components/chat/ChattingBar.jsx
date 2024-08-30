import React, { useRef,useState } from "react";
import * as S from "./style";
import send from "../../assets/send.png";
import apiCallai from "../../api/ApiAi";
import record from "../../assets/record.png";
import recording from "../../assets/recording.png";

const ChattingBar = ({ addMessage}) => {
    const textareaRef = useRef(null);
    const [isRecording,setIsRecording] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const handleReconding = async()=>{
        if(!isRecording){
            try{
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorderRef.current = new MediaRecorder(stream);
                mediaRecorderRef.current.ondataavailable = (event) => {
                    audioChunksRef.current.push(event.data);
                };
                mediaRecorderRef.current.start();
                setIsRecording(true);
            }
            catch(error){console.log(error)};
        }
        else{
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
                audioChunksRef.current = [];
                setIsRecording(false);

                try {
                    const formData = new FormData();
                    formData.append("audio", audioBlob, "recording.wav");
                    const response = await apiCallai('/api/chatbot/voice', "POST", formData);
                    console.log('response:', response);
                } catch (error) {
                    console.log(error);
                }
            }   
        }
    }
    const handleResizeHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = '30px';
        textarea.style.height = Math.min(textarea.scrollHeight, 60) + 'px'; 
    };

    const sendMessage = async () => {
        const message = textareaRef.current.value;
        if (message.trim()) {
            setIsSending(true);
            addMessage(message, 'user');
            textareaRef.current.value = '';
            handleResizeHeight();

            try {
                const response = await apiCallai('/api/chatbot/chat', "POST", { "message":message });
                const aiResponseMessage = response.data.response;
                addMessage(aiResponseMessage, 'ai');
            } catch (error) {
                console.log(error);
            } finally{
                setIsSending(false);
            }
        }
    };

    return (
        <S.ChattingContainer>
            <S.recordButton onClick={handleReconding}>
                <S.recordimg src={isRecording ? recordingImg : record} />
            </S.recordButton>
            <S.messageInput 
                ref={textareaRef} 
                onChange={handleResizeHeight} 
                rows="1"
                disabled={isSending}
            />
            <S.Button onClick={sendMessage}>
                <img src={send} alt="send" />
            </S.Button>
        </S.ChattingContainer>
    );
};

export default ChattingBar;
