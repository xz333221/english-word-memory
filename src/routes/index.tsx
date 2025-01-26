import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Prefix from '../pages/Prefix';
import About from '../pages/About';
import Root from "@/pages/Root";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* 重定向根路径 "/" 到 "/word/Home" */}
            <Route path="/" element={<Navigate to="/word/home" replace/>}/>
            <Route path="/word" element={<Navigate to="/word/home" replace/>}/>
            <Route path="/word/Home" element={<Prefix/>}/>
            <Route path="/word/about" element={<About/>}/>
            <Route path="/word/root" element={<Root/>}/>
        </Routes>
    );
}

export default AppRoutes;
