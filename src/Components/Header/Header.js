import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" srcset="" />
            <nav>
                <a href="/draf">Draf</a>
                <a href="/ranked">Ranked</a>
                <a href="/teams">Teams</a>
            </nav>
        </div>
    );
};

export default Header;