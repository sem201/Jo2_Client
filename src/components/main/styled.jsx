import styled from "styled-components";

export const RecentWeatherContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%;
    height : 120px;
    background-color : #fff;
    border-radius : 20px;
    overflow: hidden;
    margin -top : 1em;
`
export const Userstateimage = styled.div`
    width: 40px;
    height: 40px;
    margin-right : 10px;
    background-position : ${(props) => props.position}
`



export const RecentWeatherState = styled.img`
    display: block;
    width:35px;
    height: 31px;
`

export const RecentTextContainer = styled.p`
    display : inline-block;
    text-align: center;
`

export const RecentWeather = styled.div`
    flex : 1;
    background-size : 700%;
    display : block;
    background-position : ${(props) => props.position}
    flex-direction : column;
    align-items : center;
    justify-content : center;
    font-size = 14px;
    color : #000;
    padding : 10px;
`

export const AnalysisContainer=styled.div`
    width:100%;
    height: 85%;
    min-height: 400px;
    box-sizing: border-box;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 30px;
    padding:3em;
    margin-top: 1em;
    box-shadow: 5px 5px 5px #D9D9D9;
    position : relative;
`
export const AnalysisCaution = styled.p`
    font-size: 15px;
    font-weight: bold;
    font-family: Inter;
    margin:0;
    padding: 0;
    position : absolute;
    bottom : -30px;
    right: 0;
    color : #B2B0BD;

`


export const AnalysisPageContainer= styled.div`
    width:100%;
    height : 80%;
    flex-wrap : wrap;
    gap : 20px;
    overflow: auto;
`

export const MypageContainer= styled.div`
    width:100%;
    max-height : 55%;
    flex-wrap : wrap;
    gap : 20px;
    overflow: auto;
`

export const MainUserContainer= styled.div`
    width:100%;
    min-height : 22%;
    flex-wrap : wrap;
    gap : 20px;
    overflow: auto;
`
export const UserWeather = styled.img`
    width: 320px;
    height: 110px;
    margin-top: 1em;
`
export const UserWeatherContainer = styled.div `
    width : 100%;
    height : 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    padding:2em 0;
    box-shadow: 5px 5px 5px #D9D9D9;
    margin-bottom : 20px;
`
export const UserWeatherSum = styled.p`
    font-size:10px;
    font-weight: 400;
    font-family: Inter;
    margin: 0 0 0.5em 0;
    flex: 1; 
    text-align: left;
`
export const DaysContainer = styled.div`
    display: block;
    margin-left: 1em;
    margin-top : 0.4em;
    
`

export const UserDay = styled.p`
    font-size : 10px;
    font-weight : 300;
    font-family : inter;
    margin-bottom: 0;
    margin-top : 0;
    flex : 0;
    text-align : left;
`


export const WeatherState = styled.img`
    display : blcok;
    width:35px;
    height: 31px;
    margin-left: 1.1em; 
`

export const FeelingWeatherContainer = styled.div`
    display: flex;
    margin-bottom : 1em;
`
export const UserText = styled.p`
    font-size: 45px;
    font-weight: bold;
    font-family: Inter;
    margin:0;
    padding: 0;
`
export const AnalysisText = styled.p`
    font-size: 24px;
    font-weight: bold;
    font-family: Inter;
    margin:0;
    padding: 0 0.5em;
`


export const UserInfoContainer = styled.div`
    display : flex;
    align-items : center;
    padding : 0;
    margin: 0;
`

export const HelloText=styled.p`
    display: block;
    font-size: 32px;
    font-weight: bold;
    font-family: Inter;
    margin:0;
    padding: 0 0 0.5em 1em;
`

export const UserStateContainer = styled.div`
    width:100%;
    height: 30%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 30px;
    padding:2em 0;
    box-shadow: 5px 5px 5px #D9D9D9;
`

export const UserState = styled.img`
    width:35px;
    height: 35px;
    margin-left : 20px;
    background-position : ${(props) => props.position}

`
export const UserRecommend = styled.p`
    display: flex;
    font-size:20px;
    font-weight: 800;
    font-family: Inter;
    margin:0;
    align-items: center;
`

export const PhraseContainer=styled.div`
    width:100%;
    height: 50%;
    min-height: 260px;
    box-sizing: border-box;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 30px;
    padding:3em;
    margin-top: 1em;
    box-shadow: 5px 5px 5px #D9D9D9;
`

export const PhraseForuul2 = styled.p`
    font-size:20px;
    font-weight: 800;
    font-family: Inter;
    margin:0px;
    line-height: 160%;
`

// YoutubeGuide 유튜브 링크 예정 ㅇㅇ..
export const YoutubeGuideContainer = styled.div`
    min-height: 25%;
    display:flex;
    flex-direction: row;
    gap:1em;
    overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`

export const YoutubeContainer = styled.div`
    box-sizing: border-box;
    width: 45%; 
    min-width: 48%;
    height: 70%;
    border-radius: 30px 30px 0 0;
    background-color: #d9d9d9;
    scroll-snap-align: start;
`

export const Thumbnail = styled.img`
    width:100%;
    height: 100%;
    border-radius: 30px 30px 0 0;
`
export const youtubeTitle = styled.div`
    font-size: 12px;
    font-family: Inter;
    padding:0 5px;
    font-weight: 600;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 0 0 30px 30px;
    margin-top: -5px;
`