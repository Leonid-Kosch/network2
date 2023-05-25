import React from 'react';
import moduleStyle from './Dialogs.module.css';
import ContactList from './Contact-list/Contact-list';
import MessageItem from './Message-item/Message-item';
import ChatManager from './ChatManager';
import store from '../../State/State';

function Dialogs() {
    let messagesItems = store.dialogs.messagesList.map((item) =>
        <MessageItem from={item.from} content={item.text} id={item.id} time={item.time}/>
    )
    return ( 
        <div className={moduleStyle.container}>
            <ContactList />
            <div className={moduleStyle.chat}>
                <div className={moduleStyle.chat__list}>
                    {messagesItems}
                </div>
                <ChatManager />
            </div>
        </div>
    );
}

export default Dialogs;