import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <NavLink
                        to="/word/Home"
                        className={({isActive}) => (isActive ? 'active' : '')}
                    >
                        前缀
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/word/About"
                        className={({isActive}) => (isActive ? 'active' : '')}
                    >
                        后缀
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
