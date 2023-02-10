import React from 'react';
import moduleStyle from '../../Profile.module.css'

function Post() {
    return (  
        <div className={moduleStyle.Posts__item}>
            <div>
                <img></img>
                <h4></h4>
            </div>
            <p></p>
            <span>×</span>
        </div>  
    );
}

export default Post;