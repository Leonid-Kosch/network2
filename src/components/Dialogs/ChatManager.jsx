import React from 'react';
import locaclStyle from './Dialogs.module.css';
import { addMessagesState } from '../../State/State';
import { click } from '@testing-library/user-event/dist/click';
function ChatManager() {
    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        
        // Add leading zeros to single digit numbers
        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        return(
            hours + ':' + minutes
        );
      }
    function sendMessage (e) {
        if (e.type === 'click') {
            let textArea = e.target.parentNode.querySelector('textArea');
            if (textArea.value != '') {
                let correctTime = displayTime();
                addMessagesState(textArea.value, correctTime);
                textArea.value = '';
            }
        } else{
            if(e.code === 'Enter' && e.shiftKey === false ) {
                let textArea = e.target.parentNode.querySelector('textArea');
                if (textArea.value != '') {
                    let correctTime = displayTime();
                    addMessagesState(textArea.value, correctTime);
                    textArea.value = '';
                }
            }
        }
    };
    return ( 
        <div className={locaclStyle.chatManager}>
            <textarea placeholder='Type' onKeyDown={sendMessage}/>
            <button onClick={sendMessage}>
                Send
            </button>
        </div>
    );
}

export default ChatManager;