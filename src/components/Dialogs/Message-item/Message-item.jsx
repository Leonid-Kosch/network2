import React from 'react';
import LocalStyle from '../Dialogs.module.css';
function MessageItem(props) {
    return (
        <div className={LocalStyle.MessageItem + ' ' + props.from} id={props.id} key={props.id}>
            <p>
                {props.content}
            </p>
            <span>
                {props.time}
            </span>
        </div>
    );
}

export default MessageItem;