import React from 'react';
import moduleStyle from './Dialogs.module.css';
import ContactList from './Contact-list/Contact-list';
import MessageItem from './Message-item/Message-item';
import ChatManager from './ChatManager';

function Dialogs() {
    return ( 
        <div className={moduleStyle.container}>
            <ContactList />
            <div className={moduleStyle.chat}>
                <div className={moduleStyle.chat__list}>
                    <MessageItem from='messageItem_Friends' content="Hello"/>
                    <MessageItem from='messageItem_My' content='Hello. How are you?'/>
                    <MessageItem from='messageItem_Friends' content="Good"/>
                    <MessageItem from='messageItem_Friends' content="Hello"/>
                    <MessageItem from='messageItem_My' content='Hello. How are you?'/>
                    <MessageItem from='messageItem_Friends' content="Good"/>
                    <MessageItem from='messageItem_Friends' content="Hello"/>
                    <MessageItem from='messageItem_My' content='Hello. How are you?'/>
                    <MessageItem from='messageItem_Friends' content="Good"/>
                    <MessageItem from='messageItem_Friends' content="Hello"/>
                    <MessageItem from='messageItem_My' content='Hello. How are you?'/>
                    <MessageItem from='messageItem_Friends' content="Good"/>
                </div>
                <ChatManager />
            </div>
        </div>
    );
}

export default Dialogs;