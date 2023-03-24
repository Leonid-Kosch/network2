import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../img/Leonid.webp';
function ContactItem (props) {
    return ( 
        <Link to='/Test' id={props.id}>
            <img src={props.img} />
            <h3>{props.name}</h3>
        </Link>
    );
}

export default ContactItem ;