if (typeof global === 'undefined') {
    window.global = window;
}
import React from 'react';
import { createBrowserRouter,Navigate } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Mainpage from './pages/Mainpage';
import MyPage from './pages/MyPage';
import Chatpage from './pages/Chatpage';
import Account from './components/account/Account'
import Analysispage from './pages/Analysispage';

const router = createBrowserRouter([
    {path: '/',element: <Loginpage/>,},
    {path: "/main", element: <Mainpage /> ,},
    { path: "/chat", element: <Chatpage /> },
    { path: "/kakao/login", element: <Account /> },
    { path: "/mypage", element: <MyPage /> },
    { path : "/analysis", element: <Analysispage/>},
    { path: '*', element: <Navigate to="/main" replace /> },
]);

export default router;