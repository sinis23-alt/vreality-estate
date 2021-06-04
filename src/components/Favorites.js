import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css'
import Card from './Card'
import foto1 from '../images/apartamento1.png'
import back from '../images/arrow_back_black_24dp.svg'



function Favorites(){
    return(
        <div>
            <Navbar></Navbar>
        <div className="e-home" >
            
            <div className="s-tittle-bar">
                    <img src={back} alt="img"/>
                    <p>Tus favoritos</p>
                </div>

                <div className="recomencaciones-seccion" >
                    <Card image = {foto1} titulo="Aparamento lujoso" precio="$800.000.000" area="1.000m²" ></Card>
                    <Card image = {foto1} titulo="Aparamento lujoso" precio="$800.000.000" area="1.000m²" ></Card>   
                    <Card image = {foto1} titulo="Aparamento lujoso" precio="$800.000.000" area="1.000m²" ></Card>   
                    <Card image = {foto1} titulo="Aparamento lujoso" precio="$800.000.000" area="1.000m²" ></Card> 
                    
                </div>

                <button className="E-vermas" type="button" name="ver mas">Ver más favoritos</button>
        
    

                <Footer></Footer>
            
        </div> 
    </div>   
    );
}
export default Favorites;