import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/chat/header";
import Chatmain from "../components/chat/Chatmain";
import ChattingBar from "../components/chat/ChattingBar";

const Chatpage = () => {
    const [messages, setMessages] = useState([]);
    const [aiMessages, setAiMessages] = useState([]); // AI 메시지를 관리할 상태 추가
    const location = useLocation();
    const responseData = location.state?.responseData;

    const initialAiMessage = responseData?.message; // 초기 AI 메시지
    if (initialAiMessage && aiMessages.length === 0) {
        setAiMessages([initialAiMessage]);
    }

    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const addAiMessage = (message) => {
        setAiMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <>
            <Header />
            <Chatmain messages={messages} aiMessages={aiMessages} />
            <ChattingBar addMessage={addMessage} addAiMessage={addAiMessage} />
        </>
    );
};

export default Chatpage;
