import React from 'react';
import moduleStyles from '../Profile.module.css';
import Post from './Post/Post';

function Posts () {
    return (  
        <div className={moduleStyles.Posts}>
            <h3>
                My publications
            </h3>
            <div className={moduleStyles.Posts__managment}>
                <textarea placeholder='Type'>

                </textarea>
                <button>
                    Publicate
                </button>
            </div>
            <div className={moduleStyles.Posts__list}>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Posts;