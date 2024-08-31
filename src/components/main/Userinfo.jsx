import React, { useEffect,useState } from "react";
import * as S from "./styled";
import sunny from "../../assets/sunny.png"
import apiCall from "../../api/Apiserver";
import { getToken,getUserInfo } from "../../utils/auth";

const UserInfo=()=>{
    const [score,setScore]=useState(null);
    const token = getToken();
    const name = getUserInfo();
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await apiCall('/api/v1/weather','GET',null,token);
                setScore(response.data.score);
                console.log(score);
            }
            catch(error){
                console.log("우울증 점수 api 에러 ",error)
                if(error.response.status === 401){
                    getReissueToken('/main') //page마다 다르게
                }
            }
        }
        fetchData();
    },[])
    return(
        <S.MainUserContainer>
            <S.HelloText>반가워요! {name} 님!</S.HelloText>
            <S.UserStateContainer>
                <S.UserState src={sunny}/>
                <S.UserRecommend>{name}님! 오늘은 이런걸 <br/>해보시면 어떨까요?</S.UserRecommend>
            </S.UserStateContainer>
        </S.MainUserContainer>
    )
}

export default UserInfo;