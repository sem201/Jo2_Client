import React from "react";
import * as S from "./style";
import back from "../../assets/back.png";
import apiCallai from "../../api/ApiAi";
import { useNavigate } from "react-router-dom";

const header=()=>{
    const navigate=useNavigate()
    const handlewarning =async()=>{
        if (confirm("채팅을 종료하시겠습니까?") == true){
            const response = await apiCallai('/api/chatbot/end', "POST", null);
            console.log('채팅종료',response);
            navigate('/main');
        }else{  
            return;
        }
    }
    return(
        <S.headerContainer>
            <div><img src={back} onClick={handlewarning}/></div>
            <div><S.P>Joyfully</S.P></div>
            <div></div>
        </S.headerContainer>
    )
}

export default header;