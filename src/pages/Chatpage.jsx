if (typeof global === 'undefined') {
    window.global = window; // 이 코드가 컴포넌트 외부에 있음
}
import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/chat/header";
import Chatmain from "../components/chat/Chatmain";
import ChattingBar from "../components/chat/ChattingBar";

const Chatpage = () => {
    const [messages, setMessages] = useState([]);
    const location = useLocation();
    const responseData = location.state?.responseData;

    useEffect(() => {
        const initialAiMessage = responseData?.message;
        if (initialAiMessage) {
            setMessages([{ type: 'ai', text: initialAiMessage }]);
        }
    }, [responseData]);

    const addMessage = (message, type) => {
        setMessages((prevMessages) => [...prevMessages, { type, text: message }]);
    };

    return (
        <>
            <Header />
            <Chatmain messages={messages} />
            <ChattingBar addMessage={addMessage} />
        </>
    );
};

export default Chatpage;
