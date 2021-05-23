import React from 'react'
import './Registrarse.css'
import logo from '../images/logo.svg';

function Registrarse() {
    return (
            <div>
            <div className="o-contenido">
                <div className="o-imageregister" />
                <div className="o-logoandform">
                <img className="o-logo" id="logoazul" src={logo} alt="logo" />
                <h2 className="o-registertext">Regístrate</h2>
                <div className="o-text">
                    <h3 className="o-mensaje">La casa de tu sueños te está esperando. :)</h3>
                    <a className="o-crearcuentaempresa" href="#">Crea una cuenta de empresa</a>
                </div>
                <form className="o-formulario" action="#">
                    <div className="o-camposizquierdos">
                    <p>Nombre</p>
                    <input type="text" className="o-campo" />
                    </div>
                    <div className="o-camposderechos">
                    <p>Apellido</p>
                    <input type="text" className="o-campo" />
                    </div>
                    <div className="o-camposizquierdos">
                    <p>Número de télefono</p>
                    <input type="number" className="o-campo" />
                    </div>
                    <div className="o-camposderechos">
                    <p>Correo electrónico</p>
                    <input type="text" className="o-campo" />
                    </div>
                    <div className="o-camposizquierdos">
                    <p>Contraseña</p>
                    <input type="password" className="o-campo" />
                    </div>
                    <div className="o-camposderechos">
                    <p>Confirmar contraseña</p>
                    <input type="password" className="o-campo" />  
                    </div>                
                </form>
                <div className="o-terminosycondiciones">
                    <input type="checkbox" id="terminos" />
                    <label htmlFor="terminos">Acepto los <a href="#">Términos y Condiciones.</a></label>
                </div>
                <div className="o-crearcuenta">
                    <button className="o-botoncrearcuenta" type="button" name="crear cuenta">Crear cuenta</button>
                </div>
                <h3 className="o-tenercuenta">¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></h3><a href="#">
                </a></div><a href="#">
                </a></div><a href="#"></a>
            </div>
    )
}

export default Registrarse
