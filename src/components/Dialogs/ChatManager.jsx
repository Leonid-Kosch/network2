import React from 'react';
import locaclStyle from './Dialogs.module.css';
function ChatManager() {
    return ( 
        <div className={locaclStyle.chatManager}>
            <textarea placeholder='Type' />
            <button>
                Send
            </button>
        </div>
    );
}

export default ChatManager;