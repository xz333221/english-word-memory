import React from 'react';
import Routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from '@/components/Sidebar'; // 引入侧边栏组件
import './index.css'

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Sidebar />
                <div className="content">
                    <Routes />
                </div>
            </Router>
        </div>
    );
}


export default App;
