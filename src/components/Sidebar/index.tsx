import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({isActive}) => (isActive ? 'active' : '')}
                    >
                        单词
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/About"
                        className={({isActive}) => (isActive ? 'active' : '')}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
