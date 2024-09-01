import React from "react"; 
import * as S from "../main/styled";
import sunny from "../../assets/sunny.png"
import { getToken,getUserInfo } from "../../utils/auth";
import rain from "../../assets/rain.png"
import sncloud from "../../assets/sncloud.png"
import cloudy from "../../assets/cloudy.png"

const UserInfo =()=>{
    const token = getToken();
    const name = getUserInfo();
    return name;
}


const MainUser = (props) => {
    const name = UserInfo();
    console.log("프롭스오류",props.weatherImageList);
    return(
        <S.MypageContainer>
            <S.UserInfoContainer>
                <S.UserText> {name}님! </S.UserText> 
            <S.UserState src = {props.weatherImageList[0]?.image} alt="Use weather icon"/>
            </S.UserInfoContainer>
            <S.FeelingWeatherContainer>
                <S.UserRecommend> {name}님의 최근기분날씨</S.UserRecommend>
            </S.FeelingWeatherContainer>
            <S.RecentWeatherContainer>
                {props.weatherImageList.map((temp, i) => (
                    <S.RecentWeather key={i}>  
                    <S.RecentTextContainer>
                    {temp.day}
                    </S.RecentTextContainer>
                    <S.RecentWeatherState src={temp.image}/> 
                </S.RecentWeather>
                ))}
                
            </S.RecentWeatherContainer>
        </S.MypageContainer>
        
    )
}

export default MainUser;