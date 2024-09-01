import React, { useEffect, useState } from "react";
import * as S from "../main/styled";
import { getToken,getUserInfo } from "../../utils/auth";
import apiCall from "../../api/Apiserver";
import styled from "styled-components";

const UserInfo = () => {
    const name = getUserInfo();
    return name;
};

// 전체 분석 데이터 가져오는 컴포넌트
const FullAnalysis = ({ setAnalysisData }) => {
    const token = getToken();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiCall('/api/v1/chat-server/analysis', 'GET', null, token);
                setAnalysisData(response.data.data); // 전체 데이터를 상태로 설정
                console.log(response.data.data); // 데이터 확인용
            } catch (error) {
                console.log("전체분석결과 오류", error);
            }
        };
        fetchData();
    }, [token]);

    return null; // 이 컴포넌트는 데이터를 가져오고 상태만 업데이트하므로 렌더링하지 않음
};

// 유저 정보와 분석 결과를 보여주는 컴포넌트
const Information = () => {
    const [analysisData, setAnalysisData] = useState(null); // 분석 데이터를 저장하는 상태
    const name = UserInfo();

    return (
        <S.AnalysisPageContainer>
            <S.AnalysisText>{name}님의 전체분석결과</S.AnalysisText>
            <FullAnalysis setAnalysisData={setAnalysisData} /> {/* 데이터를 가져와서 업데이트 */}
            <S.AnalysisContainer>
                {/* <S.UserRecommend> {name}님의 전체분석결과 </S.UserRecommend> */}
                {analysisData ? ( /* 조건문 (있냐없냐)*/
                    <div dangerouslySetInnerHTML={{ __html: `${analysisData.result}` }} />
                ) : (
                    <p>분석 데이터를 불러오는 중입니다...</p>
                )}
                <S.AnalysisCaution>분석은 마지막분석 3일이후에 가능합니다. </S.AnalysisCaution>
            </S.AnalysisContainer>
        </S.AnalysisPageContainer>
    );
};

export default Information;
    