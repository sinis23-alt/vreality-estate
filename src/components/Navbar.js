import React from 'react'
import './Navbar.css'
import logo from '../images/logo.svg';
import favicon from '../images/favicon.svg'
import mensageicon from '../images/mensageicon.svg'
import fotodeperfil from '../images/fotoperfil.png'
import {Link} from "react-router-dom";


const Navbar = ()=>(
    <div>
    <div className="e-navbar-container">
        <figure className = "logo">
             <Link to="/home"><img src={logo} alt="logo"></img></Link>
        </figure>

        <div className ="E-derecha">
          <Link to="/post" > <button  className="E-publicarboton" type="button" name="publicar">Publicar</button> </Link> 
           <Link to="/favorites"> <img src ={favicon} alt="icon fav"/> </Link>
            <div className="e-mensaje">
                <Link to="/chats" ><img src ={mensageicon} alt="icon mensage"/></Link>
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