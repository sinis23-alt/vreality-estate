import React from 'react'
import './Footer.css'
import twitter from './img/twitter.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import logo from './img/logoblanco.png';


const Footer = ()=> (

    <div className ="E-footercontainer">
        <div className="terminos">
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
            </p>
            <div className = "derechaterminos">
                <button>Contáctanos</button>
                <div>
                    <a>Politica de tratamiento de datos</a>
                    <a>Terminos y condiciones</a>
                </div>
            </div>
        </div>

        <div className ="redessociales" >
            <img className="o-logo" src={logo} alt="proyecto1"/>
            <div className="o-social">
                <img className="instagram" src={instagram} alt="instagram"/>
                <img className="facebook" src={facebook} alt="facebook"/>
                <img className="twitter" src={twitter} alt="twitter"/>
            </div>
            </div>
    </div>

);

export default Footer;