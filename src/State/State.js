import { mainRender } from "../index.js";
let store = {
    profile: {
        posts: [
            {id:0, text:'Post1'}, 
            {id:1, text:'Post2'},
            {id:2, text:'Post3'},
            {id:3, text:'Post4'},
            {id:4, text:'Post5'}
        ]
    }
};

export function addPost (newPostText) {
    let newPost = {id:0, text:newPostText};
    store.profile.posts.unshift(newPost); 
    postManagment();
};
export function deletePost(postId) {
    store.profile.posts.splice(postId, 1);
    postManagment();
}

function postManagment () {
    for (let i=0; i < store.profile.posts.length; i++){
        store.profile.posts[i].id = i;
    }
    mainRender();
};

export default store;