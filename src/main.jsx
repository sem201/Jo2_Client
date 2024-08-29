if (typeof global === 'undefined') {
    window.global = window; // 이 코드가 컴포넌트 외부에 있음
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} />
);