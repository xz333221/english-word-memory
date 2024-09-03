import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Prefix from '../pages/Prefix';
import About from '../pages/About';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* 重定向根路径 "/" 到 "/word/Home" */}
            <Route path="/" element={<Navigate to="/word/Home" replace />} />
            <Route path="/word" element={<Navigate to="/word/Home" replace />} />
            <Route path="/word/Home" element={<Prefix/>}/>
            <Route path="/word/About" element={<About/>}/>
        </Routes>
    );
}

export default AppRoutes;
