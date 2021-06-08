import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Message.css'
import Chat from './Chat.js'; 
import back from '../images/arrow_back_black_24dp.svg'
import msg from '../images/message.svg'
import axios from 'axios';


export class Message extends Component{

    state = {
        data: [],
    }

    api = 'https://run.mocky.io/v3/cdfbc4bd-feea-4932-983a-77ff282beb66'

    consultarDatos = () => {
        return new Promise ((resolve, reject) => {
            try{
                axios.get(this.api)
                    .then( (res) => {
                        return resolve(res.data.chats)
                    }).catch( (err) => {
                        return reject(err)
                    })
            }catch{
                console.log("Se ha presentado un problema consumiendo la API")
            }
        })
    }

    componentDidMount = () => {
        this.consultarDatos()
            .then((data) => {
                this.setState({data: data.map((a, indice) => ({ ...a, ids: indice + 1 }))})
            }).catch((err) => {
                console.log(err)
            })
    }

    render()
    {

        return (
            <div>
                <Navbar/>
                <div className="d-contenedor">
                    <div className="d-tittle-bar">
                        <img src={back} alt="img"/>
                        <p>Tus mensajes</p>
                    </div>
                    <div className="d-messages">
                        <div className="d-chats">
                        {
                                this.state.data.map((item, idx) => {
                                    return(
                                        <Chat 
                                            key={item.idx} 
                                            image={item.foto} 
                                            name={item.nombre} 
                                            hour={item.hora}                                             
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className="d-center">
                            <img src={msg} alt="img"/>
                            <p>Selecciona un mensaje</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        
           
        )


    };
    
}

export default Message