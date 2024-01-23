import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messageReceived, setMessageReceived] = useState('');

    const sendMessage = () => {
        if (message.trim() !== '') {
            socket.emit('send_message', {
                message
            });
            setMessage('');
        }
    }

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessageReceived(data.message);
        });
    }, [socket]);

    return (
        <div className='container' id='chatContainer'>
            <div className='input-container' id='inputContainer'>
                <input
                    className='input-field'
                    placeholder='Type your message...'
                    type='text'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id='messageInput'
                />
                <button
                    className='send-button'
                    onClick={sendMessage}
                    id='sendMessageButton'
                >
                    Send Message
                </button>
            </div>
            <div className='message-container' id='messageContainer'>
                {messageReceived && (
                    <div className='received-message' id='receivedMessage'>
                        {messageReceived}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chat;
