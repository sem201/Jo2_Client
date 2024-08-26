import React, { useRef } from "react";
import * as S from "./style";
import send from "../../assets/send.png";
import apiCallai from "../../api/ApiAi"; // API 호출 모듈 가져오기

const ChattingBar = ({ addMessage, addAiMessage }) => {
    const textareaRef = useRef(null);

    const handleResizeHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = '20px';
        textarea.style.height = Math.min(textarea.scrollHeight, 40) + 'px'; 
    };

    const sendMessage = async () => {
        const message = textareaRef.current.value;
        if (message.trim()) {
            addMessage(message); // 유저 메시지 추가
            textareaRef.current.value = '';
            handleResizeHeight();

            try {
                // API 호출하여 AI 응답 받기
                const response = await apiCallai('/api/chatbot/chat', "POST", { message });
                const aiResponseMessage = response.data.message; // AI 응답 메시지
                addAiMessage(aiResponseMessage); // AI 메시지 추가
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <S.ChattingContainer>
            <S.messageInput 
                ref={textareaRef} 
                onChange={handleResizeHeight} 
                rows="1"
            />
            <S.Button onClick={sendMessage}>
                <img src={send} alt="send" />
            </S.Button>
        </S.ChattingContainer>
    );
};

export default ChattingBar;
