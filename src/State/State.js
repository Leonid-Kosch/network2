import { mainRender } from "../mainRender.js";
import Image from '../img/Leonid.webp'
import { UNSAFE_LocationContext, json } from "react-router-dom";
let store = {
    profile: {
        posts: [
            {id:0, text:'Post1'}, 
            {id:1, text:'Post2'},
            {id:2, text:'Post3'},
            {id:3, text:'Post4'},
            {id:4, text:'Post5'}
        ]
    },
    dialogs: {
        contactList: [
            {id:0, img:{Image}, name:'Leonid', status:'unactive'},
            {id:1, img:{Image}, name:'Andrey', status:'unactive'}
        ],
        messagesList: [

        ],
        messagesListAll: [
            [
                {id:0, text:'Hello Leonid', time:'17:34', from:'messageItem_My'},
                {id:1, text:'Hello bro', time:'17:35', from:'messageItem_Friends'}
            ],
            [
                {id:0, text:'Hello Andrey', time:'17:34', from:'messageItem_My'},
                {id:1, text:'Hello bro', time:'17:35', from:'messageItem_Friends'}
            ]
        ]
    }
};
if (localStorage.getItem('store') ) {
    store = JSON.parse(localStorage.getItem('store'));
}
export function chatSwtich (chatId) {
    let chat = store.dialogs.messagesListAll[chatId];
    store.dialogs.messagesList = chat;
    for(let i=0; i<store.dialogs.contactList.length; i++) {
        if (store.dialogs.contactList[i].status == 'active') {
            store.dialogs.contactList[i].status = 'unactive';
            break;
        }
    };
    store.dialogs.contactList[chatId].status = 'active';
    storeSaving();
    mainRender();
};
export function addPost (newPostText) {
    let newPost = {id:0, text:newPostText};
    store.profile.posts.unshift(newPost); 
    idManager(store.profile.posts);
};
export function deletePost(postId) {
    store.profile.posts.splice(postId, 1);
    idManager(store.profile.posts);
}

function idManager (area) {
    for (let i=0; i < area.length; i++){
        area[i].id = i;
    }
    storeSaving();
    mainRender();
};

export function addMessagesState (newMessageText, newMessageTime) {
    let newMessage = {id:'', text:newMessageText, time:newMessageTime, from:'messageItem_My'};
    store.dialogs.messagesList.push(newMessage);
    console.log(store.dialogs.messagesList)
    idManager(store.dialogs.messagesList);
};

function storeSaving () {
    let storeString = JSON.stringify(store);
    localStorage.setItem('store', storeString);
};

export default store;