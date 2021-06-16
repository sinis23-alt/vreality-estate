import React from 'react'
import './Registrarse.css'
import logo from '../images/logo.svg';
import {Link} from "react-router-dom";

function RegistrarEmp() {
    return (
            <div>
            <div className="o-contenido">
                <div className="o-imageregister" />
                <div className="o-logoandform">
                <img className="o-logo" id="logoazul" src={logo} alt="logo" />
                <h2 className="o-registertext">Regístrate</h2>
                <div className="o-text">
                    <p className="o-mensaje">La casa de tu sueños te está esperando. :)</p>
                    <Link to='/registrarse' className="o-crearcuentaempresa" href="#">Crea una cuenta de persona</Link>
                </div>
                <form className="o-formulario" action="#">
                    <div className="o-camposizquierdos">
                    <p className="s-etiqueta" >Nombre</p>
                    <input type="text" className="o-campo" />
                    </div>
                    <div className="o-camposderechos">
                    <p  className="s-etiqueta">NIT</p>
                    <input type="text" className="o-campo" />
                    </div>
                    <div className="o-camposizquierdos">
                    <p  className="s-etiqueta">Número de télefono</p>
                    <input type="number" className="o-campo" />
                    </div>
                    <div className="o-camposderechos">
                    <p  className="s-etiqueta" >Correo electrónico</p>
                    <input type="text" className="o-campo" />
                    </div>
                    <div className="o-camposizquierdos">
                    <p  className="s-etiqueta" >Contraseña</p>
                    <input type="password" className="o-campo" />
                    </div>
                    <div className="o-camposderechos">
                    <p  className="s-etiqueta" >Confirmar contraseña</p>
                    <input type="password" className="o-campo" />  
                    </div>                
                </form>
                <div className="o-terminosycondiciones">
                    <input type="checkbox" id="terminos" />
                    <label htmlFor="terminos">Acepto los <a className="s-vinculo" href="#">Términos y Condiciones.</a></label>
                </div>
                <div className="o-crearcuenta">
                    <button className="o-botoncrearcuenta" type="button" name="crear cuenta">Crear cuenta</button>
                </div>
                <p className="o-tenercuenta">¿Ya tienes una cuenta? <Link to='/'><a className="s-vinculo" >Inicia sesión</a></Link></p><a href="#">
                </a></div><a href="#">
                </a></div><a href="#"></a>
            </div>
    )
}

export default RegistrarEmp
