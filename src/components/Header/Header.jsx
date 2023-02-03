import React from 'react';
import  moduleStyle from './Header.module.css';

function Header () {
    return ( 
        <div className={moduleStyle.container}>
            <a className={moduleStyle.logo}></a>
        </div>
    );
}

export default Header;