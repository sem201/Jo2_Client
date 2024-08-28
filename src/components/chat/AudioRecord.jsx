import React, { useState, useCallback } from "react";
import apiCallai from "../../api/ApiAi";

const AudioRecord = () => {
    const [message, setMessage] = useState("");
    const [stream, setStream] = useState(null);
    const [media, setMedia] = useState(null);
    const [onRec, setOnRec] = useState(false);
    const [source, setSource] = useState(null);
    const [analyser, setAnalyser] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [downloadUrl, setDownloadUrl] = useState(null);

    const handleButton=async()=>{
        try{
            const response = await apiCallai('/api/chatbot/start','POST',
                {"user_id":2024}
            );
            console.log('reponse:',response);
            console.log("쿠카2",document.cookie);
        }
        catch(error){console.log(error)}
    }

    const handlemessage = async()=>{
        try{
            const response = await apiCallai('/api/chatbot/chat',"POST",
                {"message":message}
            );
            console.log('response:',response);
        }
        catch(error){console.log(error)};
    }
    const handlevoicemessage = async()=>{
        try{
            const response = await apiCallai('/api/chatbot/voice',"POST",
                {"audio":message}
            );
            console.log('response:',response);
        }
        catch(error){console.log(error)};
    }
    const handlemessageend = async()=>{
        try{
            const response = await apiCallai('/api/chatbot/end',"POST",null);
            console.log('end response',response);
        }
        catch(error){console.log(error)}
    }

    const onRecAudio = () => {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioCtx.createAnalyser();
        setAnalyser(analyser);

        function makeSound(stream) {
            const source = audioCtx.createMediaStreamSource(stream);
            setSource(source);
            source.connect(analyser);
            analyser.connect(audioCtx.destination);
        }

        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            setStream(stream);
            setMedia(mediaRecorder);
            makeSound(stream);
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

            mediaRecorder.ondataavailable = function (e) {
                setAudioUrl(e.data);
                setOnRec(false);
                handlevoicemessage(e.data);
            };
        });
    };

    const offRecAudio = () => {
        media.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(false);
            handlevoicemessage(e.data);
        };

        stream.getAudioTracks().forEach(function (track) {
            track.stop();
        });

        media.stop();
        analyser.disconnect();
        source.disconnect();
    };

    const onSubmitAudioFile = useCallback(() => {
        if (audioUrl) {
            const downloadUrl = URL.createObjectURL(audioUrl);
            setDownloadUrl(downloadUrl);

            console.log(downloadUrl); // 다운로드 가능한 링크 출력
            const sound = new File([audioUrl], "soundBlob", {
                lastModified: new Date().getTime(),
                type: "audio"
            });
            console.log(sound); // File 정보 출력
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
