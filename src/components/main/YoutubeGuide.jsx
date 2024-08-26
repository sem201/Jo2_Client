import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";
import apiCall from "../../api/Apiserver";
import { getToken } from "../../utils/auth";

const YoutubeGuide=()=>{
    const token = getToken()
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response = await apiCall('/api/v1/contents/video-links',"GET",null,token);
                console.log(response.data.data.cards);
                setData(response.data.data.cards);
            }
            catch(error){
                console.log("error",error)
            }
        }
        fetchData();
    },[]);
    return(
        <S.YoutubeGuideContainer>
            {data.map((item,index)=>(
                <S.YoutubeContainer key={index}>
            <Link to={item.link} style={{ textDecoration: "none",color: "black"}}>
                <S.Thumbnail src={item.imageLink}/>
                <S.youtubeTitle>{item.title}</S.youtubeTitle>
            </Link>
            </S.YoutubeContainer>
            ))}
        </S.YoutubeGuideContainer>
    )
}

export default YoutubeGuide;