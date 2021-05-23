import React from 'react'
import './Login.css'
import imglogin from '../images/login.png'
import logo from '../images/logo.svg';

function ResContraseña() {
    return (
        <div className="s-contenedor">
        <div className="s-conimagen">
          <img className="s-imagen" src={imglogin} alt="" />
        </div>
        <div className="s-concampos">
          <div className="s-datos">
            <img className="s-logo" src={logo} alt="Logo" />
            <a className="s-vinculo" href>Volver a inicio de sesión</a>
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