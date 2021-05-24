import React from 'react'
import './Chat.css'
import photo from '../images/profile.png'

function Chat(props) {
    return (
        <div className="d-Cchat">
            <div>
                <img className="d-profile-pt" src={photo} alt="img"/>
            </div>
            <div className="d-column">
                <p className="d-text-Chat"><strong> {props.name} </strong></p>
                <div className="d-row">
                    <p className="d-text-Chat">Te ha enviado un mensaje</p>
                    <p className="d-text-Chat">2H</p>
                </div>
            </div>
        </div>
    )
}

export default Chat