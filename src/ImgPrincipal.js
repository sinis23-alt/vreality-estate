import img from './logo.svg';
import './ImgPrincipal.css';

function ImgPrincipal({img}) {
  return (
    <div>      
        <img src={img} className="ImgPrin" alt="Visita 360" />        
    </div>
  );
}

export default ImgPrincipal;