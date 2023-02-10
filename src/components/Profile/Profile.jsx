import React from 'react';
import Posts from './Posts/Posts';
import modyleStyle from './Profile.module.css';
import Wall from './Wall/Wall';

function Profile() {
    return ( 
        <div className={modyleStyle.container}>
            <Wall />
            <Posts />
        </div>
    );
}

export default Profile;