import React from "react";
import * as S from "./styled";
import home from "../../assets/home.png";
import chat from "../../assets/chat.png";
import chart from "../../assets/chart.png";
import mypage from "../../assets/mypage.png";
import { Link, useNavigate } from "react-router-dom";
import apiCallai from "../../api/ApiAi";
import { getUserId } from "../../utils/auth";

const Footer = () => {
    const navigate = useNavigate();
    const handleButton = async () => {
        const memberId = getUserId();
        try {
            const response = await apiCallai('/api/chatbot/start', "Post", {"user_id":memberId});
            navigate('/chat', { state: { responseData: response.data } });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <S.FooterContainer>
            <Link to='/main'><S.Button><S.NavImg src={home} /></S.Button></Link>
            <S.Button onClick={handleButton}>
                <S.NavImg src={chat} />
            </S.Button>
            <Link to='/analysis'><S.Button><S.NavImg src={chart} /></S.Button></Link>
            <Link to='/mypage'><S.Button><S.NavImg src={mypage} /></S.Button></Link>
        </S.FooterContainer>
    );
};

export default Footer;
