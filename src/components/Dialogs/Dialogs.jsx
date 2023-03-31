import React from 'react';
import moduleStyle from './Dialogs.module.css';
import ContactList from './Contact-list/Contact-list';
import MessageItem from './Message-item/Message-item';

function Dialogs() {
    return ( 
        <div className={moduleStyle.container}>
            <ContactList />
            <div className={moduleStyle.chat}>
                <MessageItem />
            </div>
        </div>
    );
}

export default Dialogs;