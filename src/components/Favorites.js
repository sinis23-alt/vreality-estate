import React, {Component} from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css'
import Card from './Card'
import foto1 from '../images/apartamento1.png'
import back from '../images/arrow_back_black_24dp.svg'
import axios from 'axios';
import { Link } from 'react-router-dom';



export class Favorites extends Component {

    state = {
        data: [],
    }

    api = 'https://run.mocky.io/v3/2b3a062f-b8e8-4fe0-a916-5fe94c79e6e6'

    consultarDatos = () => {
        return new Promise ((resolve, reject) => {
            try{
                axios.get(this.api)
                    .then( (res) => {
                        return resolve(res.data.favorites)
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

    render()
    {
        console.log(this.state.data[0])
        return(
            <div>
                <Navbar></Navbar>
            <div className="e-home" >
                
                <div className="s-tittle-bar">
                        <Link to="/home"> <img src={back} alt="img"/> </Link>
                        <p>Tus favoritos</p>
                    </div>
        
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
        
                    <button className="E-vermas" type="button" name="ver mas">Ver todos los favoritos</button>
            
        
        
                    <Footer></Footer>
                
            </div> 
        </div>   
        );
    };
}
export default Favorites;