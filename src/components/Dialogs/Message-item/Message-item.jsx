import React from 'react';
import LocalStyle from '../Dialogs.module.css';
function MessageItem(props) {
    return (
        <div className={LocalStyle.MessageItem + ' ' + props.from}>
            <p>
                {props.content}
            </p>
            <span>
                19:46
            </span>
        </div>
    );
}

export default MessageItem;