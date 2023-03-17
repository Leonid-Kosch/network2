import React from 'react';
import moduleStyles from '../Profile.module.css';
import Post from './Post/Post';
import store from '../../../State/State';
import { addPost } from '../../../State/State';

function Posts() {
    let textArea;
    function textAreaFocus(e) {
        textArea = e.target;
        console.log(textArea)
    };
    function sendPost() {
        if (textArea) {
            if (textArea.value != ''){
                addPost(textArea.value);
                textArea.value = '';
            } else{
                alert('Fill your post');
            }
        } 
    };
    function sendPostEnter (e) {
        if (e.code == 'Enter' && !e.shiftKey) {
            if (textArea) {
                if (textArea.value != ''){
                    addPost(textArea.value);
                } else{
                    alert('Fill your post');
                }
            } 
        }
    };
    return (
        <div className={moduleStyles.Posts}>
            <h3>
                My publications
            </h3>
            <div className={moduleStyles.Posts__managment}>
                <textarea placeholder='Type' onFocus={textAreaFocus} onKeyDown={sendPostEnter}>

                </textarea>
                <button onClick={sendPost}>
                    Publicate
                </button>
            </div>
            <div className={moduleStyles.Posts__list}>
                {store.profile.posts.map(item => <Post text={item.text} key={item.id} id={item.id} />)}
            </div>
        </div>
    );
}

export default Posts;