import React from "react";
import * as S from "./style";

const Chatmain = ({ messages }) => {
    console.log("메시지들",messages)
    return (
        <S.ChatContainer>
            {messages.map((msg, index) => (
                msg.type === 'ai' ? (
                    <S.AimessageContainer key={`ai-${index}`}>
                        <S.chattingAi>{msg.text}</S.chattingAi>
                    </S.AimessageContainer>
                ) : (
                    <S.UsermessageContainer key={`user-${index}`}>
                        <S.ChattingUser>{msg.text}</S.ChattingUser>
                    </S.UsermessageContainer>
                )
            ))}
        </S.ChatContainer>
    );
};

export default Chatmain;
