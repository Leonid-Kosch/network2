import React from 'react';
import moduleStyle from '../../Profile.module.css';
import Image from '../../../../img/Leonid.webp';

function Post(props) {
    return (  
        <div className={moduleStyle.Posts__item}  id={props.id}>
            <div>
                <img src={Image} />
                <h4>
                    Leonid
                </h4>
            </div>
            <p>
                {props.text}
            </p>
            <span>×</span>
        </div>  
    );
}

export default Post;