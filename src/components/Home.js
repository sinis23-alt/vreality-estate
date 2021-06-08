import React, {Component} from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css'
import Card from './Card'
import axios from 'axios';
import { useHistory } from "react-router-dom";

export class Home extends Component{
   
    state = {
        data: [],
    }

    api = 'https://run.mocky.io/v3/0df0712b-8096-4240-81b2-68db300cc660'

    consultarDatos = () => {
        return new Promise ((resolve, reject) => {
            try{
                axios.get(this.api)
                    .then( (res) => {
                        return resolve(res.data.home)
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
            .then((data) => {
                this.setState({data: data.map((a, indice) => ({ ...a, ids: indice + 1 }))})
            }).catch((err) => {
                console.log(err)
            })
    }
    

    render(){
        return(
            <div>
                <Navbar/>
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
                            {
                                this.state.data.map((item, idx) => {
                                    return(
                                        <Card 
                                            key={item.idx} 
                                            image={item.foto} 
                                            titulo={item.nombre} 
                                            precio={`$ ${item.precio} `} 
                                            area={`${item.area} m²`}
                                        />
                                    )
                                })
                            }
                        </div>
                        <button  className="E-vermas" type="button" name="ver mas">Ver más inmuebles</button>
                        <Footer/>
                    </div>
                </div> 
            </div>   
        )
    };
}

export default Home;