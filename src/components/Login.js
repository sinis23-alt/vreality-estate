import React from 'react'
import './Login.css'
import imglogin from '../images/login.png'
import logo from '../images/logo.svg';
import { withRouter, Link} from "react-router-dom";

function Login( ...props) {

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
            <Link className="s-boton" to='/home'>Inciar sesión</Link>
          </div>
          <div className="s-concampos">

          <div className="s-enlaces">
            <p>¿Sin una cuenta? <Link className="s-vinculo" to='/registrarse'>Regístrate</Link></p>
            <Link to="restaurarcontraseña" className="s-vinculo">¿Olvidaste la contraseña?</Link>
          </div>
         
          </div>          
        </div>
      </div>
    )
}

export default withRouter(Login);
