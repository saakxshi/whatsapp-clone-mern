import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import React, { useState } from 'react';
import './Chat.css';
import MoreVert from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios';

function Chat({ messages }) {
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "DEMO APP",
            timestamp: "Just now!",
            received: false,
        });

        setInput('');
    };


    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p> Last seen at..</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timestamp}</span>
                    </p>
                ))}

                {/*                 
                <p className='chat__message'>
                    <span className='chat__name'>Pragya</span>
                    This is a message
                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>

                <p className='chat__message chat__reciever'>
                    <span className='chat__name'>Pragya</span>
                    This is a message
                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>

                <p className='chat__message'>
                    <span className='chat__name'>Pragya</span>
                    This is a message
                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p> */}
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Type a message'
                        type='text'
                    />
                    <button onClick={sendMessage}
                        type='submit'>
                        Send a message
                    </button>
                </form>
                <MicIcon />

            </div>
        </div>
    );
}

export default Chat;