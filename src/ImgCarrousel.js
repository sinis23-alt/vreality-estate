import img from './logo.svg';
import './ImgCarrousel.css';

function ImgCarrousel({img}) {
  return (
    <div>      
        <img src={img} className="ImgCarrousel" alt="Visita 360" /> 
    </div>
  );
}

export default ImgCarrousel;