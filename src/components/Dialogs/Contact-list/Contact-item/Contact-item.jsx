import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../img/Leonid.webp';
import { chatSwtich } from '../../../../State/State';
function ContactItem (props) {
    function openChat (e) {
        let linkId = e.target.id;
        chatSwtich(linkId);
    };
    return ( 
        <a id={props.id} onClick={openChat} className={props.status}>
            <img src={props.img} />
            <h3>{props.name}</h3>
        </a>
    );
}

export default ContactItem ;