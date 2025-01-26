import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';

const Sidebar: React.FC = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <NavLink
                        to="/word/home"
                        className={({isActive}) => (isActive ? 'active' : '')}
                    >
                        前缀
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/word/about"
                        className={({isActive}) => (isActive ? 'active' : '')}
                    >
                        后缀
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/word/root"
                        className={({isActive}) => (isActive ? 'active' : '')}
                    >
                        词根
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
