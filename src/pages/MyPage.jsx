import React, {useEffect,useState} from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
//import styled from "styled-components";
import MainUser from "../components/mypage/MainUser";
import Summary from "../components/mypage/Summary";
import { getToken } from "../utils/auth";
import { Link } from "react-router-dom";
import apiCall from "../api/Apiserver";
import sunny from "../assets/sunny.png"
import cloudy from "../assets/cloudy.png"
import rain from "../assets/rain.png"
import sncloud from "../assets/sncloud.png"

const getWeatherImage = (score) => {
    if (score < 15) {
        return { image: rain};
    } else if (score >= 15 && score<20) {
        return { image: cloudy};
    } else if (score >= 20 && score< 25) {
        return { image: sncloud };
    } else if (score >= 25 && score< 30) {
        return { image: sunny };
    } else {
        return { image: sunny};
    }
};

const MyPage=()=>{
    const token = getToken(); // Auth token retrieval
    const [score, setScore] = useState(null); // State to hold the score
    const [weather, setWeather] = useState({ image: null }); // State to hold weather info
    const [result, setResult] = useState('');
    const [day, setDay] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiCall('/api/v1/weather', "GET", null, token);
                console.log("api response", response);
                const fetchedScore = response.data.data.recentWeathers[0].scoreVO.score; // Assuming the score is in this location
                console.log("fetched score",fetchedScore);
                setScore(fetchedScore); // Set the score state
                setWeather(getWeatherImage(fetchedScore)); // Update weather state based on score
                const fetchedResult = response.data.data.recentWeathers[0].result;
                setResult(fetchedResult);
                const fetchedDay = response.data.data.recentWeathers[0].dayOfWeek;
                setDay(fetchedDay);

            } catch (error) {
                console.log("날씨 에러", error);
            }
        };
        fetchData();
    }, [token]);

    return(
        <>
        <Header/>
        <Footer/>
        <MainUser weatherImage={weather.image}/>
        <Summary weather={weather} day={day} result={result}/>
        </>
    )
}

export default MyPage;