import styled from "styled-components";

export const headerContainer = styled.div`
    height:80px;
    width:95%;
    padding:0 0.5em;
    display:flex;
    justify-content: space-between ;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
`

export const Img = styled.img`
    
`

export const P = styled.p`
    font-size: 36px;
    font-family: Itim;
`
// chatmain
export const ChatContainer = styled.div`
    width:100%;

    margin-top: 50px;
    max-height:80%;
    background-color: inherit;
    overflow-y:auto;
    &::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
`

export const AimessageContainer = styled.div`
    width:100%;
    margin-bottom:2em;
`
export const UsermessageContainer = styled.div`
    width:100%;
    margin-bottom:2em;
    display: flex;
    justify-content: flex-end;
`
export const chattingAi = styled.div`
    max-width: 80%;
    min-height: 30px;
    background-color: #FFFDF5;
    border-radius: 30px;
    padding:0 10px;
    display: flex;
    align-items: center;
    word-break: break-all;
    font-size: 18px;

`

export const ChattingUser = styled.div`
    max-width: 80%;
    min-height: 30px;
    background-color: #F8DFB8;
    right:0;
    border-radius: 30px;
    padding:0 20px;
    display: inline-block;
    margin-left: 0;
    align-items: center;
    word-break: break-all;
    font-size: 18px;
`

//chattingbar
export const ChattingContainer = styled.div`
    width:100vw;
    min-height:10%;
    padding:0 1em;
    display: flex;
    align-items:center;
    gap:10px;
    position: fixed;
    bottom:0;
    left: 0;
    background-color: #F8D49E;
`

export const recordButton = styled.button`
    width:30px;
    height: 30px;
    background-color: inherit;
    border:0;
`
export const recordimg = styled.img`
    width:30px;
    height: 30px;
`

export const messageInput = styled.textarea`
    box-sizing: border-box;
    width:70%;
    height: 30px;
    padding:0 1ex;
    border:0;
    border-radius: 20px;
    background-color: #fff;
    outline: none;

    font-size: 18px;
`

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border:0;
    background-color: inherit;
`