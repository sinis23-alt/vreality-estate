import React from 'react'
import './Navbar.css'
import logo from './img/logo.svg';
import favicon from './img/favicon.svg'
import mensageicon from './img/mensageicon.svg'
import fotodeperfil from './img/fotoperfil.png'

const Navbar = ()=>(
    <div>
    <div className="e-navbar-container">
        <figure className = "logo">
             <img src={logo} alt="logo"></img>
        </figure>

        <div className ="E-derecha">
            <button className="E-publicarboton" type="button" name="publicar">Publicar</button>
            <img src ={favicon} alt="icon fav"/>
            <div className="e-mensaje">
                <img src ={mensageicon} alt="icon mensage"/>
                <p className="mensagenumero">1</p>
            </div>
            
            <div className="E-perfil">
                <p className="nombreperfil">Jhon Acevedo</p>
                <img className="E-fotoperfil" src = {fotodeperfil} alt="foto de perfil"/>
            </div>
        </div>
    </div>
</div>

);

export default Navbar;