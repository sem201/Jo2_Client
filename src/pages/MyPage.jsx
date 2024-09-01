import React, {useEffect,useState} from "react";
if (typeof global === 'undefined') {
    window.global = window; // 이 코드가 컴포넌트 외부에 있음
}
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import MainUser from "../components/mypage/MainUser";
import Summary from "../components/mypage/Summary";
import { getToken } from "../utils/auth";
import apiCall from "../api/Apiserver";
import { useReissueToken } from "../api/ApiReissue";
import sunny from "../assets/sunny.png";
import cloudy from "../assets/cloudy.png";
import rain from "../assets/rain.png";
import sncloud from "../assets/sncloud.png";

const getWeatherImage = (score) => {
    if (score < 20) {
        return sunny;
    } else if (score >= 20 && score < 50) {
        return sncloud;
    } else if (score >= 50 && score < 80) {
        return cloudy;
    } else if (score >= 80 && score < 100) {
        return rain;
    } else {
        return sunny;
    }
};

const MyPage = () => {
    const token = getToken(); // Auth token retrieval
    const { getReissueToken } = useReissueToken();
    const [weatherList, setWeatherList] = useState([]); // Combined state for weather list

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiCall('/api/v1/weather', "GET", null, token);
                console.log("API response", response);
                
                // Parse the response and create a list of weather data
                const weatherData = response.data.data.recentWeathers.map(temp => ({
                    image: getWeatherImage(temp.scoreVO.score),
                    result: temp.result,
                    day: temp.date
                }));

                // Update the state with the fetched weather data
                setWeatherList(weatherData);
            } catch (error) {
                console.log("날씨 에러", error);
                if (error.response?.status === 401) {
                    getReissueToken('/mypage');
                }
            }
        };
        
        fetchData();
    }, []); // Add necessary dependencies

    return (
        <>
            <Header />
            <MainUser weatherImageList={weatherList} />
            <Summary weatherList={weatherList} />
            <Footer />
        </>
    );
};

export default MyPage;
