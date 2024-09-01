import React,{useEffect,useRef} from "react";
import * as S from "./style";

const Chatmain = ({ messages }) => {
    const chatContainerRef = useRef(null);
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);
    const formatMessage = (text) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };
    return (
        <S.ChatContainer ref={chatContainerRef}>
            {messages.map((msg, index) => (
                msg.type === 'ai' ? (
                    <S.AimessageContainer key={`ai-${index}`}>
                        <S.chattingAi>{formatMessage(msg.text)}</S.chattingAi>
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
