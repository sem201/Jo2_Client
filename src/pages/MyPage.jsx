if (typeof global === 'undefined') {
    window.global = window; // 이 코드가 컴포넌트 외부에 있음
}
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
//import styled from "styled-components";
import MainUser from "../components/mypage/MainUser";
import Summary from "../components/mypage/Summary";

const MyPage=()=>{
    return(
        <>
        <Header/>
        <Footer/>
        <MainUser/>
        <Summary/>
        </>
    )
}

export default MyPage;