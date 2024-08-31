import React, { useRef,useState } from "react";
import * as S from "./style";
import send from "../../assets/send.png";
import apiCallai from "../../api/ApiAi";

const ChattingBar = ({ addMessage}) => {
    const textareaRef = useRef(null);
    const [isSending, setIsSending] = useState(false);

    const handleResizeHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = '20px';
        textarea.style.height = Math.min(textarea.scrollHeight, 40) + 'px'; 
    };

    const sendMessage = async () => {
        const message = textareaRef.current.value;
        if (message.trim()) {
            setIsSending(true);
            addMessage(message, 'user');
            textareaRef.current.value = '';
            handleResizeHeight();

            try {
                // API 호출하여 AI 응답 받기
                const response = await apiCallai('/api/chatbot/chat', "POST", { "message":message });
                const aiResponseMessage = response.data.response;
                console.log("보내진 메시지", message);
                console.log(aiResponseMessage);
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
