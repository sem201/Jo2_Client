import React from "react"; 
import * as S from "../main/styled";
import sunny from "../../assets/sunny.png"
import weather from "../../assets/weather.png"

const MainUser=()=>{
    return(
        <S.MainUsercContainer>
            <S.UserText>AIGO님</S.UserText>
            <S.FeelingWeatherContainer>    
                <S.UserState src={sunny}/> 
                <S.UserRecommend>000님의 최근기분날씨</S.UserRecommend>
            </S.FeelingWeatherContainer>
            <S.UserWeather src= {weather}/>
        </S.MainUsercContainer>
    )
}

export default MainUser;