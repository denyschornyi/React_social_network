import React from 'react';
 
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

import classes from './Dialogs.module.css'

const Dialogs = (props) => {

    let dialogElements = props.state.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);
    let messagesElements = props.state.messageData.map(message => <MessageItem message={message.message}/>)


    const messageRef = React.createRef();

    const sendMessage = () => {
        const messageText = messageRef.current.value;
        alert(messageText);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}

                <div><textarea ref={messageRef}></textarea></div>
                <div><button onClick={sendMessage}>Send message</button></div>
            </div>
        </div>
    );
}

export default Dialogs