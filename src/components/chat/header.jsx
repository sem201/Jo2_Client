import React from "react";
import * as S from "./style";
import back from "../../assets/back.png"
import menu from "../../assets/menu.png"

const header=()=>{
    return(
        <S.headerContainer>
            <div><img src={back}/></div>
            <div><S.P>Joyfully</S.P></div>
            <div></div>
        </S.headerContainer>
    )
}

export default header;