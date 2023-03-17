import React from 'react';
import moduleStyle from '../../Profile.module.css';
import Image from '../../../../img/Leonid.webp';
import { deletePost } from '../../../../State/State';

function Post(props) {
    function removePost (e) {
        let postId = e.target.parentNode.id;
        deletePost(postId);
    };
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
            <span onClick={removePost}>×</span>
        </div>  
    );
}

export default Post;