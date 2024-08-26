import React from "react";
import styled from "styled-components";
import google from "../assets/google.png"
import kakao from "../assets/kakao.png"
import naver from "../assets/naver.png"

const TitleContainer = styled.div`
    width:100%;
    height: 55%;
    display: flex;
    align-items: center;
    justify-content:center;
`
const Title = styled.p`
    font-size: 60px;
    font-family: Itim;
`
const SocialContainer = styled.div`
    width:100%;
    height:35%;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;
`

const Img = styled.img`
    height: 60px;
`
const  Loginpage=()=>{
    const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
    const REDIRECT_URI = 'http://localhost:5173/kakao/login';
    const KAKAO_AUTH_URI = `http://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        window.location.href = KAKAO_AUTH_URI;
    };
    return(
        <>
            <TitleContainer>
                <Title>Joyfully</Title>
            </TitleContainer>
            <SocialContainer>
                <Img src={google}/>
                <Img src={kakao} onClick={loginHandler}/>
                <Img src={naver}/>
            </SocialContainer>
        </>
    )
}

export default Loginpage;