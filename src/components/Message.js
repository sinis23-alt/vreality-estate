import React from 'react'
import './Message.css'
import Chat from './Chat.js'; 
import back from '../images/arrow_back_black_24dp.svg'
import msg from '../images/message.svg'

function Message() {
    return (
        <div className="d-contenedor">
            <div className="d-tittle-bar">
                <img src={back} alt="img"/>
                <p>Tus mensajes</p>
            </div>
            <div className="d-messages">
                <div className="d-chats">
                    <Chat name="Juan Sebastian Sinisterra"/>
                    <Chat name="Jenifer Lopez"/>
                    <Chat name="Cristiano Ronaldo"/>
                </div>
                <div className="d-center">
                    <img src={msg} alt="img"/>
                    <p>Selecciona un mensaje</p>
                </div>
            </div>
        </div>
    )
}

export default Message