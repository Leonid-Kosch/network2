import React from 'react';
import moduleStyle from './Dialogs.module.css';
import ContactList from './Contact-list/Contact-list';

function Dialogs() {
    return ( 
        <div className={moduleStyle.container}>
            <ContactList />
            <div className={moduleStyle.chat}>

            </div>
        </div>
    );
}

export default Dialogs;