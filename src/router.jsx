import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Mainpage from './pages/Mainpage';
// import Surveypage from './pages/surveypage';
import MyPage from './pages/MyPage';
import Chatpage from './pages/Chatpage';
import Account from './components/account/Account'
import AudioRecord from './components/chat/AudioRecord';
import Analysispage from './pages/Analysispage';

const router = createBrowserRouter([
    {path: '/',element: <Loginpage/>,},
    {path: "/main", element: <Mainpage /> ,},
    { path: "/chat", element: <Chatpage /> },
    { path: "/kakao/login", element: <Account /> },
    // { path: "/survey", element: <Surveypage /> },
    { path: "/mypage", element: <MyPage /> },
    { path:'record',element:<AudioRecord/>},
    { path : "/analysis", element: <Analysispage/>}
]);

export default router;