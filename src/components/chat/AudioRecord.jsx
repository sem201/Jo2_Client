import React, { useState, useCallback } from "react";
import apiCallai from "../../api/ApiAi";
import Recorder from 'recorder-js';

const AudioRecord = () => {
    const [message, setMessage] = useState("");
    const [stream, setStream] = useState(null);
    const [recorder, setRecorder] = useState(null);
    const [onRec, setOnRec] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [downloadUrl, setDownloadUrl] = useState(null);

    const handleButton = async () => {
        try {
            const response = await apiCallai('/api/chatbot/start', 'POST', {"user_id":2024});
            console.log('response:', response);
        } catch (error) {
            console.log(error);
        }
    };

    const handlemessage = async () => {
        try {
            const response = await apiCallai('/api/chatbot/chat', "POST", {"message": message});
            console.log('response:', response);
        } catch (error) {
            console.log(error);
        }
    };

    const handlevoicemessage = async (audioBlob) => {
        try {
            const formData = new FormData();
            formData.append("audio", audioBlob, "recording.wav");

            const response = await apiCallai('/api/chatbot/voice', "POST", formData);
            console.log('response:', response);
        } catch (error) {
            console.log(error);
        }
    };

    const handlemessageend = async () => {
        try {
            const response = await apiCallai('/api/chatbot/end', "POST", null);
            console.log('end response', response);
        } catch (error) {
            console.log(error);
        }
    };

    const onRecAudio = () => {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        setStream(null); // 이전 스트림 제거
        
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                setStream(stream);
                const newRecorder = new Recorder(audioCtx);
                const input = audioCtx.createMediaStreamSource(stream);
                
                newRecorder.init(input)
                    .then(() => {
                        newRecorder.start();
                        setRecorder(newRecorder);
                        setStartTime(audioCtx.currentTime);
                        setOnRec(true);

                        const checkRecordingTime = () => {
                            if (audioCtx.currentTime - startTime > 120) {
                                offRecAudio();
                            } else {
                                requestAnimationFrame(checkRecordingTime);
                            }
                        };

                        requestAnimationFrame(checkRecordingTime);
                    })
                    .catch(error => {
                        console.error("Error initializing recorder:", error);
                    });
            })
            .catch(error => {
                console.error("Error accessing media devices:", error);
            });
    };

    const offRecAudio = () => {
        if (recorder) {
            recorder.stop()
                .then(({blob}) => {
                    setAudioUrl(blob);
                    setOnRec(false);
                    handlevoicemessage(blob);
                })
                .catch(error => {
                    console.error("Error stopping recorder:", error);
                });
        }

        if (stream) {
            stream.getAudioTracks().forEach(track => track.stop());
        }
    };

    const onSubmitAudioFile = useCallback(() => {
        if (audioUrl) {
            const downloadUrl = URL.createObjectURL(audioUrl);
            setDownloadUrl(downloadUrl);
            console.log(downloadUrl);
        }
    }, [audioUrl]);

    return (
        <>
            <button onClick={handleButton}>채팅 시작</button>
            <input 
                placeholder="텍스트로 보내기" 
                value={message}
                onChange={(e) => setMessage(e.target.value)} 
            />
            <button onClick={handlemessage}>작성한 텍스트 보내기</button>
            <button
                onClick={onRec ? offRecAudio : onRecAudio}
                style={{
                    backgroundColor: onRec ? 'red' : 'blue',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                {onRec ? '녹음 중지' : '녹음 시작'}
            </button>
            <button onClick={onSubmitAudioFile}>결과 확인</button>
            {downloadUrl && (
                <a href={downloadUrl} download="recording.wav">
                    녹음된 파일 다운로드
                </a>
            )}
            <button onClick={handlemessageend}>채팅 종료</button>
        </>
    );
};

export default AudioRecord;
