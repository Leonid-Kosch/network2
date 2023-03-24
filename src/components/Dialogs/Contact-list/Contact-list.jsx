import React from 'react';
import LocalStyle from '../Dialogs.module.css';
import ContactItem from './Contact-item/Contact-item';
import store from '../../../State/State';

function ContactList () {
    return ( 
        <div className={LocalStyle.ContactList}>
            {store.dialogs.contactList.map(contactItemInfo => <ContactItem id={contactItemInfo.id} key={contactItemInfo.id} img={contactItemInfo.img} name={contactItemInfo.name}/>)}
        </div>
    );
}

export default ContactList;