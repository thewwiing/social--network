import React from 'react'
import DialogsItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import s from './Dialogs.module.css';
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage
    let messagesElements = state.messagesData.map((message) =>
        <Message message={message.message} key={message.id} />
    )
    let dialogsElements = state.dialogsData.map((dialog) =>
        <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} />
    );
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            onChange={ onNewMessageChange }
                            placeholder="Enter your message..."
                            value={newMessageBody}
                        />
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
