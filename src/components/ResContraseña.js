import React from 'react'
import './Login.css'
import imglogin from '../images/login.png'
import logo from '../images/logo.svg';
import {Link} from "react-router-dom";


function ResContraseña() {
    return (
        <div className="s-contenedor">
        <div className="s-conimagen">
          <img className="s-imagen" src={imglogin} alt="" />
        </div>
        <div className="s-concampos">
          <div className="s-datos">
            <img className="s-logo" src={logo} alt="Logo" />
            <Link className="s-vinculo" to="/">Volver a inicio de sesión</Link>
            <h2>Restablece tu contraseña</h2>
            <p className="s-eslogan">Por favor digita tu nueva contraseña</p>
            <p className="s-etiqueta">Nueva contraseña</p>
            <input className="s-entrada" type="password" />
            <p className="s-etiqueta">Confirmar contraseña</p>
            <input className="s-entrada" type="password" />
            <a href="#" className="s-boton">Restablecer contraseña</a>
          </div>
          <div className="s-concampos">                 
          </div>          
        </div>
      </div>
    )
}

export default ResContraseña