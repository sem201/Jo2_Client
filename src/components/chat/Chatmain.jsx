import React from "react";
import * as S from "./style";

const Chatmain = ({ messages, aiMessages }) => {
    return (
        <S.ChatContainer>
            {aiMessages.map((aiMsg, index) => (
                <S.AimessageContainer key={`ai-${index}`}>
                    <S.chattingAi>{aiMsg}</S.chattingAi>
                </S.AimessageContainer>
            ))}
            {messages.map((msg, index) => (
                <S.UsermessageContainer key={`user-${index}`}>
                    <S.ChattingUser>{msg}</S.ChattingUser>
                </S.UsermessageContainer>
            ))}
        </S.ChatContainer>
    );
};

export default Chatmain;
