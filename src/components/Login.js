import React from 'react'
import './Login.css'
import imglogin from '../images/login.png'
import logo from '../images/logo.svg';

function Login() {
    return (
        <div className="s-contenedor">
        <div className="s-conimagen">
          <img className="s-imagen" src={imglogin} alt="" />
        </div>
        <div className="s-concampos">
          <div className="s-datos">
            <img className="s-logo" src={logo} alt="Logo" />
            <h2>Inicia sesión</h2>
            <p className="s-eslogan">Encuentra el inmueble de tus sueños :)</p>
            <p className="s-etiqueta">Correo electronico</p>
            <input className="s-entrada" type="text" />
            <p className="s-etiqueta">Contraseña</p>
            <input className="s-entrada" type="password" />
            <a href="#" className="s-boton">Iniciar sesión</a>
          </div>
          <div className="s-concampos">

          <div className="s-enlaces">
            <p>¿Sin una cuenta? <a className="s-vinculo" href>Regístrate</a></p>
            <a href="#" className="s-vinculo">¿Olvidaste la contraseña?</a>
          </div>
         
          </div>          
        </div>
      </div>
    )
}

export default Login
