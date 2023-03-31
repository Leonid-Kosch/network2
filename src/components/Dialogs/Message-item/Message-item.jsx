import React from 'react';
import LocalStyle from '../Dialogs.module.css';
function MessageItem() {
    return (
        <div className={LocalStyle.MessageItem}>
            <p>
                Hi
            </p>
            <span>
                19:46
            </span>
        </div>
    );
}

export default MessageItem;