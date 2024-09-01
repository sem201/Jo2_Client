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
    }, [token, setAnalysisData]);

    return null; // 이 컴포넌트는 데이터를 가져오고 상태만 업데이트하므로 렌더링하지 않음
};

// 유저 정보와 분석 결과를 보여주는 컴포넌트
const Information = () => {
    const [analysisData, setAnalysisData] = useState(null); // 분석 데이터를 저장하는 상태
    const name = UserInfo();

    return (
        <S.AnalysisPageContainer>
            <S.UserText>{name}님</S.UserText>
            <FullAnalysis setAnalysisData={setAnalysisData} /> {/* 데이터를 가져와서 업데이트 */}
            <S.AnalysisContainer>
                {analysisData ? (
                    <div>
                        <p>분석 결과: {analysisData.result}</p>
                        <p>분석 ID: {analysisData.analysis_id}</p>
                        <p>멤버 ID: {analysisData.member_id}</p>
                        <p>분석 날짜: {new Date(analysisData.date).toLocaleDateString()}</p>
                    </div>
                ) : (
                    <p>분석 데이터를 불러오는 중입니다...</p>
                )}
            </S.AnalysisContainer>
        </S.AnalysisPageContainer>
    );
};

export default Information;
    