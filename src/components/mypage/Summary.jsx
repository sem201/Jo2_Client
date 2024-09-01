import React from "react"; 
import * as S from "../main/styled";
import sunny from "../../assets/sunny.png"
import cloudy from "../../assets/cloudy.png"
import rain from "../../assets/rain.png"
import sncloud from "../../assets/sncloud.png"
import { getToken } from "../../utils/auth";
import { Link } from "react-router-dom";
import apiCall from "../../api/Apiserver";


const Weather = (props) => {
    // const token = getToken(); // Auth token retrieval
    // const [score, setScore] = useState(null); // State to hold the score
    // const [weather, setWeather] = useState({ image: null }); // State to hold weather info
    // const [result, setResult] = useState('');
    // const [day, setDay] = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await apiCall('/api/v1/weather', "GET", null, token);
    //             console.log("api response", response);
    //             const fetchedScore = response.data.data.recentWeathers[0].scoreVO.score; // Assuming the score is in this location
    //             console.log("fetched score",fetchedScore);
    //             setScore(fetchedScore); // Set the score state
    //             setWeather(getWeatherImage(fetchedScore)); // Update weather state based on score
    //             const fetchedResult = response.data.data.recentWeathers[0].result;
    //             setResult(fetchedResult);
    //             const fetchedDay = response.data.data.recentWeathers[0].dayOfWeek;
    //             setDay(fetchedDay);

    //         } catch (error) {
    //             console.log("날씨 에러", error);
    //         }
    //     };
    //     fetchData();
    // }, [token]);
    console.log(props);

    return (
        <S.MypageContainer>
            {props.weatherList.map((temp, i) => (

            <S.UserWeatherContainer key={i}>
                {temp.image && (
                    <S.WeatherState src={temp.image} alt="Weather State" />
                )}
                <S.DaysContainer>
                    <S.UserDay> {temp.day} </S.UserDay>
                    <S.UserWeatherSum>{temp.result}</S.UserWeatherSum>
                </S.DaysContainer>
            </S.UserWeatherContainer>
            ))}
        </S.MypageContainer>
    );
};
{/* <S.UserWeatherContainer>
                {props.weather.image && (
                    <S.WeatherState src={props.weather.image} alt="Weather State" />
                )}
                <S.DaysContainer>
                    <S.UserDay> {props.day} </S.UserDay>
                    <S.UserWeatherSum>{props.result}</S.UserWeatherSum>
                </S.DaysContainer>.
            </S.UserWeatherContainer> */}

export default Weather;