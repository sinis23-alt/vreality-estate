import Ract from 'react'
import './Card.css'


const Card = ({image,titulo,precio,area})=> (
    <div>
        <div className="e-card">
            <figure>
                <img src={image} alt="foto casa"></img>
            </figure>
            <div className="card-content">
                <h4 class ="o-apartamento">{titulo}</h4>
                <h4 class="o-precio">{precio}</h4>
                <h4 class="o-area">{area}</h4>
                <a class="o-boton" href="#">Ver más</a>
            </div>
        </div>
    </div>

);

export default Card;