import React from 'react';
import moduleStyle from '../../Profile.module.css';
import Image from '../../../../img/Leonid.webp';

function Post() {
    return (  
        <div className={moduleStyle.Posts__item}>
            <div>
                <img src={Image} />
                <h4>
                    Leonid
                </h4>
            </div>
            <p>
                Hello. This is my first post.
            </p>
            <span>×</span>
        </div>  
    );
}

export default Post;