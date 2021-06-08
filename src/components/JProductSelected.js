import arrowAfter from '../images/after.png';
import arrowBefore from '../images/before.png';
import imgP from '../images/Casa.png';
import imgH from '../images/corazon.png';
import './JProductSelected.css';
import CaracteristicInfoCard from './CaracteristicInfoCard';
import imgBed from '../images/Bed.png';
import imgBath from '../images/bath.png';
import imgSize from '../images/Size.png';
import Navbar from './Navbar'
import Footer from './Footer'
import back from '../images/arrow_back_black_24dp.svg';
import axios from 'axios';
import React, {Component} from 'react';
import Favorites from './Favorites';
import { Link } from 'react-router-dom';

export class JProductSelected extends Component {

  state = {
    data: [],
  }

  api = 'https://run.mocky.io/v3/bd1a9d18-9d9f-4251-94af-194c12f58990'

  consultarDatos = () => {
      return new Promise ((resolve, reject) => {
          try{
              axios.get(this.api)
                  .then((res) => {
                      return resolve(res.data)
                  }).catch( (err) => {
                      return reject(err)
                  })
          }catch{
              console.log("Se ha presentado un problema consumiendo la API")
          }
      })
  }

  componentDidMount = () => {
      this.consultarDatos()
          .then((resonse) => {
              this.setState({data: resonse.map((a, indice) => ({ ...a, ids: indice + 1 }))})
              console.log(this.state.data[0])
          }).catch((err) => {
              console.log(err)
          })
  }

  render(){

    return (
      
      <div>
          
        <Navbar></Navbar>
        
      <div className="j-container1">
          <div className="j-container2">
          {
            this.state.data.map((item, idx) => {
              return(
                <div>
                  <div className="j-tittle-bar">
                  <Link to="/home"> <img src={back} alt="img"/> </Link>                 
                  </div>
                            
                  <div className="j-container3">
                    <div>
                        
                        <img src={item.foto1} className="j-ImgPrin" alt="Visita 360" />
                             
                        <div className="j-Carrousel">      
                            <button className="j-CarrouselButton"><img className="j-ArrowCB" src={arrowBefore}></img></button> 
                            <img src={item.foto2} className="j-ImgCarrousel" alt="Visita 360" /> 
                            <img src={item.foto3} className="j-ImgCarrousel" alt="Visita 360" />
                            <img src={item.foto4} className="j-ImgCarrousel" alt="Visita 360" /> 
                            <img src={item.foto5} className="j-ImgCarrousel" alt="Visita 360" />
                            <img src={item.foto6} className="j-ImgCarrousel" alt="Visita 360" />                     
                            <button className="j-CarrouselButton"><img className="j-ArrowCB" src={arrowAfter}></img></button> 
                        </div>
                      
                    </div>
        
                    <div className="j-InfoCard">
                        <div className="j-TittleInfoCard">      
                            <div className="j-content">
                                <h2 className="j-title">{item.nombre}</h2>
                                <div className="j-State">
                                    <h4 className="j-TextState">Negociable</h4>      
                                </div>   
                            </div>
                            <img className="j-icon" src={imgH}></img>
                        </div>    
                          
                        <h4 className="j-Text">{item.direccion}</h4> 
                        <strong><h3 className="j-TextPrice">{`$ ${item.precio}`}</h3></strong>
                        
                        <div className="j-contentCarac">
                        <CaracteristicInfoCard icons={imgBed} number={item.habitaciones} item="habitaciones"></CaracteristicInfoCard>
                        <CaracteristicInfoCard icons={imgBath} number={item.baños} item="baños"></CaracteristicInfoCard>
                        <CaracteristicInfoCard icons={imgSize} number={item.area} item="m^2"></CaracteristicInfoCard>
                        </div>
                        <input className="j-textBox" ></input>  
                        <button className="j-button">Contactar</button>
                        <div className="j-Container">      
                            <h3 className="j-info">Quiero que me contacten</h3>
                        </div>
                        
                    </div>
                    
        
                  </div>
        
                  <div className="j-container4">
                    <h3 className="j-titleInfo">Ubicación</h3>          
                    <iframe id="inlineFrameExample"
                      title="Inline Frame Example"
                      width="100%"
                      height="300"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
                    </iframe>
                    
                    <h3 className="j-titleInfo">Descripción</h3> 
                    
                    <h3 className="j-description">{item.descripcion}</h3>         
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
          <Footer></Footer>

          
        </div> 
      
    );

  };
    
}

export default JProductSelected;