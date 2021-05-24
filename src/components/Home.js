import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css'
import Card from './Card'
import foto1 from '../images/apartamento1.png'



function Home(){
    return(
        <div>
            <Navbar></Navbar>
        <div className="e-home" >
            <div >
                
                <div className ="E-Header">
                    <h1>Bienvenido de nuevo, Jhon</h1>
                    <h4>¿En qué podemos ayudarte hoy?</h4> 

                    <div className ="o-buscador">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        <input type="text" name="input searh" placeholder="Buscar"/> 
                    </div>
                </div>

                <h1 className="titulo-recomendaciones" >Recomendaciones para ti</h1>

                <div className="recomencaciones-seccion" >
                    <Card image = {foto1} titulo="Aparamento lujoso" precio="$800.000.000" area="1.000m²" ></Card>
                    <Card image = {foto1} titulo="Aparamento lujoso" precio="$800.000.000" area="1.000m²" ></Card>   
                    <Card image = {foto1} titulo="Aparamento lujoso" precio="$800.000.000" area="1.000m²" ></Card>   
                    <Card image = {foto1} titulo="Aparamento lujoso" precio="$800.000.000" area="1.000m²" ></Card>   
                    <Card image = {foto1} titulo="Aparamento lujoso" precio="$800.000.000" area="1.000m²" ></Card>   
                    <Card image = {foto1} titulo="Aparamento lujoso" precio="$800.000.000" area="1.000m²" ></Card>   
                    <Card image = {foto1} titulo="Aparamento lujoso" precio="$800.000.000" area="1.000m²" ></Card>   
                    <Card image = {foto1} titulo="Aparamento lujoso" precio="$800.000.000" area="1.000m²" ></Card>
                </div>

                <button className="E-vermas" type="button" name="ver mas">Ver más inmuebles</button>
        
    

                <Footer></Footer>
            </div>
        </div> 
    </div>   
    );
}
export default Home;