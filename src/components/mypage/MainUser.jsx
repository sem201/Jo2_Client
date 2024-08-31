import React from "react"; 
import * as S from "../main/styled";
import sunny from "../../assets/sunny.png"
import { getToken,getUserInfo } from "../../utils/auth";

const UserInfo =()=>{
    const token = getToken();
    const name = getUserInfo();
    return name;
}


const MainUser = (props) => {
    const name = UserInfo();
    return(
        <S.MainUserContainer>
            <S.UserText> {name}님! </S.UserText>
            <S.FeelingWeatherContainer>    
                <S.UserState src={sunny}/> 
                <S.UserRecommend> {name}님의 최근기분날씨</S.UserRecommend>
            </S.FeelingWeatherContainer>
            <S.RecentWeatherContainer>
                <S.RecentWeather>
                    <S.RecentTextContainer>
                    월
                    </S.RecentTextContainer>
                    <S.RecentWeatherState src={sunny}/> 
                </S.RecentWeather>
                <S.RecentWeather>
                    <S.RecentTextContainer>
                    화
                    </S.RecentTextContainer>
                    <S.RecentWeatherState src={sunny}/>
                </S.RecentWeather>
                <S.RecentWeather>
                    <S.RecentTextContainer>
                    수
                    </S.RecentTextContainer>
                    <S.RecentWeatherState src={sunny}/>
                </S.RecentWeather>
                <S.RecentWeather>
                    <S.RecentTextContainer>
                    목
                    </S.RecentTextContainer>
                    <S.RecentWeatherState src={sunny}/>
                </S.RecentWeather>
                <S.RecentWeather>
                    <S.RecentTextContainer>
                    금
                    </S.RecentTextContainer>
                    <S.RecentWeatherState src={sunny}/>
                </S.RecentWeather>
                <S.RecentWeather>
                    <S.RecentTextContainer>
                    토
                    </S.RecentTextContainer>
                    <S.RecentWeatherState src={sunny}/>
                </S.RecentWeather>
                <S.RecentWeather>
                    <S.RecentTextContainer>
                    일
                    </S.RecentTextContainer>
                    <S.RecentWeatherState src={sunny}/>
                </S.RecentWeather>
            </S.RecentWeatherContainer>
        </S.MainUserContainer>
    )
}

export default MainUser;