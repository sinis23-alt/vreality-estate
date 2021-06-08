import React from 'react'
import './Post.css'
import Navbar from './Navbar'
import Footer from './Footer'
import back from '../images/arrow_back_black_24dp.svg'
import home from '../images/casa.svg'
import aprt from '../images/apartamento.svg'
import fnca from '../images/finca.svg'
import add from '../images/add_photo.svg'
import { Link } from 'react-router-dom';

function Post() {
    return (
        <div>
            <div className="p-navbar">
                <Navbar></Navbar>
            </div>
            
            <div className="d-contenedor">
            
                <div className="d-tittle-bar">
                    <Link to="/home"> <img src={back} alt="img"/> </Link>
                    <p>Publica un inmueble</p>
                </div>
                <div className="d-Posts">
                    <div className="d-columns d-content-inpt">
                        <h1 className="d-tipo">Tipo</h1>
                        <div className="d-buttons">
                            <button className="d-columns d-btn"><img className="d-img-icon" src={home} alt="img"/>Casa</button>
                            <button className="d-columns d-btn"><img className="d-img-icon" src={aprt} alt="img"/>Apartamento</button>
                            <button className="d-columns d-btn"><img className="d-img-icon" src={fnca} alt="img"/>Finca</button>
                        </div>
                        <div className="d-column-inputs">
                            <label for="">Título</label>
                            <input id=""></input>

                            <label for="">Precio</label>
                            <input id=""></input>

                            <label for="">Descripción</label>
                            <input className="d-area-text" id="d-area-text"></input>

                            <label for="">Número de Habitaciones:</label>
                            <input id=""></input>
                            
                            <label for="">Número de baños:</label>
                            <input id=""></input>
                        </div>
                    </div>
                    <div className="d-section">
                        <div>
                            <h1>Selecciona la ubicación</h1>
                            <div className="d-columns-2">
                            <iframe id="inlineFrameExample"
                                title="Inline Frame Example"
                                width="100%"
                                height="300"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
                            </iframe>
                                <button className="d-btn-img"><img src={add} alt="img"/>Subir imágenes</button>
                            </div>
                            <button className="d-btn-pub">Publicar</button>

                        </div>                    
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Post