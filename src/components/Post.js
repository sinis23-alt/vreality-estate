import React from 'react'
import './Post.css'
import back from '../images/arrow_back_black_24dp.svg'
import home from '../images/casa.svg'
import aprt from '../images/apartamento.svg'
import fnca from '../images/finca.svg'
import add from '../images/add_photo.svg'

function Post() {
    return (
        <div className="d-contenedor">
            <div className="d-tittle-bar">
                <img src={back} alt="img"/>
                <p>Publica un inmueble</p>
            </div>
            <div className="d-Posts">
                <div className="d-columns d-content-inpt">
                    <h1 className="d-tipo">Tipo</h1>
                    <div className="d-buttons">
                        <button className="d-columns d-btn"><img src={home} alt="img"/>Casa</button>
                        <button className="d-columns d-btn"><img src={aprt} alt="img"/>Apartamento</button>
                        <button className="d-columns d-btn"><img src={fnca} alt="img"/>Finca</button>
                    </div>
                    <div className="d-column-inputs">
                        <label for="">Título</label>
                        <input id=""></input>

                        <label for="">Precio</label>
                        <input id=""></input>

                        <label for="">Descripción</label>
                        <input className="d-area-text" id="d-area-text"></input>

                        <label for="">Número de Habitaciones:</label>
                        <select id=""></select>
                        
                        <label for="">Número de baños:</label>
                        <select id=""></select>
                    </div>
                </div>
                <div className="d-section">
                    <div>
                        <h1>Selecciona la ubicación</h1>
                        <div className="d-columns-2">
                            <iframe></iframe>
                            <button className="d-btn-img"><img src={add} alt="img"/>Subir imágenes</button>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Post