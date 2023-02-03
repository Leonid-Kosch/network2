import React from 'react'
import {Link} from 'react-router-dom';
import modyleStyle from './Nav.module.css';

function Nav() {
    return ( 
        <div className={modyleStyle.container}>
            <Link to='/Profile'>
                Profile
            </Link>
            <Link to='/Dialogs'>
                Dialogs
            </Link>
        </div>
    );
}

export default Nav;