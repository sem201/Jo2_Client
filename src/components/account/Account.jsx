import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const navigate = useNavigate();
    const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
    // const REDIRECT_URI = 'http://localhost:5173/kakao/login';
    const REDIRECT_URI = 'http://43.200.156.57:5173/kakao/login';
    
    const KAKAO_AUTH_URI = `http://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    const code = new URL(window.location.href).searchParams.get("code");
    console.log('code', code);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await fetch('http://52.79.169.5:8080/api/v1/auth/sign-in?authorizationCode=' + code, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        redirectUri: REDIRECT_URI,
                        socialType: "KAKAO"
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch token');
                }

                const data = await response.json();
                console.log(data);

                if (data.data.accessToken) {
                    localStorage.setItem('accessToken', data.data.accessToken);
                    localStorage.setItem('refreshToken', data.data.refreshToken);
                    localStorage.setItem('nickname', data.data.nickname);
                    localStorage.setItem('memberId',data.data.memberId);
                    navigate('/main');
                } else {
                    console.error('Invalid token response');
                    return; 
                }

            } catch (error) {
                console.error('토큰 획득 실패:', error);
            }
        };

        if (code) {
            fetchToken();
        }
    }, [code, navigate]);

    return (
        <>
        </>
    );
};

export default Account;

