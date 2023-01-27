import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {
    return ( 
        <div className='nav'>
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