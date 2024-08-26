import React from "react"; 
import * as S from "../main/styled";
import sunny from "../../assets/sunny.png"
import cloudy from "../../assets/cloudy.png"
import rain from "../../assets/rain.png"
import sncloud from "../../assets/sncloud.png"


const Summary=()=>{
    return(
        <S.MainUsercContainer>
            <S.UserWeatherContainer>
                <S.WeatherState src = {sunny}/>
                <S.UserWeatherSum> 요약문구위치</S.UserWeatherSum>
            </S.UserWeatherContainer>
            <S.UserWeatherContainer>
                <S.WeatherState src = {cloudy}/>
                <S.UserWeatherSum> 요약문구위치</S.UserWeatherSum>
            </S.UserWeatherContainer>
            <S.UserWeatherContainer>
                <S.WeatherState src = {rain}/>
                <S.UserWeatherSum> 요약문구위치</S.UserWeatherSum>
            </S.UserWeatherContainer>
            <S.UserWeatherContainer>
                <S.WeatherState src = {sncloud}/>
                <S.UserWeatherSum> 요약문구위치</S.UserWeatherSum>
            </S.UserWeatherContainer>
        </S.MainUsercContainer>
        
        
        
    )
}
export default Summary;