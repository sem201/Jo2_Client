import React, { useEffect, useState } from "react";
import * as S from "./styled";
import apiCall from "../../api/Apiserver";
import { getToken } from "../../utils/auth";

const Phrase=()=>{
    const [phraseData,setPhraseData]=useState(null);
    const token = getToken()
    useEffect(()=>{
        
        const fetchData = async()=>{

            try{
                const response = await apiCall('/api/v1/contents/main-sentence','GET',null,token);
                setPhraseData(response.data.data.sentence);
                console.log(response.data.data.sentence);
                console.log(response);
            }
            catch(error){
                console.log("문구 못가져옴",error)
            }
        }
        fetchData();
    },[]);
    
    return(
        <S.PhraseContainer>
            <S.PhraseForuul2>
            {phraseData ? phraseData : "Loading..."}
            </S.PhraseForuul2>
        </S.PhraseContainer>
    )
}

export default Phrase;