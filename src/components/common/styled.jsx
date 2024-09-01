import { styled } from "styled-components";

export const HeadContainer = styled.div`
    width: 100%;
    max-height:10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`

export const Title = styled.div`
    font-size: 36px;
    font-family: Itim;
    margin:0;
`

export const Img = styled.img`
    width:25px;
    height: 25px;
`

//footer
export const FooterContainer=styled.div`
    width:100vw;
    background-color: #FFE0BD;
    position: fixed;
    bottom:0;
    left: 0;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
`

export const NavImg = styled.img`
    width:30px;
    height: 30px;
`

export const Button = styled.button`
    background-color: inherit;
    border:0;
    height: 70px;
    width: 100px;
`