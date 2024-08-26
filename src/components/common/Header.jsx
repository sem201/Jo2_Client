import React from "react";
import * as S from "./styled";
import logout from "../../assets/logout.png";

const Header=()=>{
    return(
        <S.HeadContainer>
            <S.Title>Joyfully</S.Title>
            <S.Img src={logout}/>
        </S.HeadContainer>
    )
}


export default Header;