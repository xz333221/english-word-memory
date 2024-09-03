import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Prefix from '../pages/Prefix';
import About from '../pages/About';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Prefix/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    );
}

export default AppRoutes;
