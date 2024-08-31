import React from "react";
import * as S from "./styled";
import logoutimg from "../../assets/logout.png";
import { useNavigate } from "react-router-dom";

const Header=()=>{
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('nickname');
        localStorage.removeItem('memberid');
        navigate('/');
    }
    return(
        <S.HeadContainer>
            <S.Title>Joyfully</S.Title>
            <S.Img src={logoutimg} onClick={logout}/>
        </S.HeadContainer>
    )
}


export default Header;