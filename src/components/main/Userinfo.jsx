import React, { useEffect,useState } from "react";
import * as S from "./styled";
import sunny from "../../assets/sunny.png";
import cloud from "../../assets/cloudy.png";
import snlcloud from "../../assets/sncloud.png";
import rain from "../../assets/rain.png";
import apiCall from "../../api/Apiserver";
import { getToken,getUserInfo } from "../../utils/auth";
import { useReissueToken } from "../../api/ApiReissue";

const UserInfo=()=>{
    const [score,setScore]=useState(null);
    const getReissueToken = useReissueToken();
    const token = getToken();
    const name = getUserInfo();
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await apiCall('/api/v1/weather/recent','GET',null,token);
                setScore(response.data.data.score);
            }
            catch(error){
                console.log("우울증 점수 api 에러 ",error)
                if(error.response.status === 401){
                    getReissueToken('/main') //page마다 다르게
                }
            }
        }
        fetchData();
    },[token, getReissueToken])
    const getWeatherImage = () => {
        if (score === null) return sunny;
        if (score >= 0 && score < 20) return sunny;
        if (score >= 20 && score < 50) return snlcloud;
        if (score >= 50 && score < 80) return cloud;
        if (score >= 80 && score <= 100) return rain;
        return sunny;
    };
    return(
        <S.MainUserContainer>
            <S.HelloText>반가워요! {name} 님!</S.HelloText>
            <S.UserStateContainer>
                <S.UserState src={getWeatherImage()}/>
                <S.UserRecommend>{name}님! 오늘은 이런걸 <br/>해보시면 어떨까요?</S.UserRecommend>
            </S.UserStateContainer>
        </S.MainUserContainer>
    )
}

export default UserInfo;