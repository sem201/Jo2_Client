import React from "react";
import * as S from "./styled";
import home from "../../assets/home.png";
import chat from "../../assets/chat.png";
import chart from "../../assets/chart.png";
import mypage from "../../assets/mypage.png";
import { Link, useNavigate } from "react-router-dom";
import apiCallai from "../../api/ApiAi";
import { getToken } from "../../utils/auth";
import { useReissueToken } from "../../api/ApiReissue";

const Footer = () => {
    const { getReissueToken } = useReissueToken();
    const token = getToken();
    const navigate = useNavigate();
    const handleButton = async () => {
        console.log("token: ",token);
        try {
            const response = await apiCallai('/api/chatbot/start', "Post", null,token);
            navigate('/chat', { state: { responseData: response.data } });
        } catch (error) {
            console.log(error);
            if(error.response.status === 401){
                getReissueToken('/chat') //page마다 다르게
            }
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
