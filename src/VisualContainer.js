import imgP from './Casa.png';
import './Carrousel.css';
import Carrousel from './Carrousel'
import ImgPrincipal from './ImgCarrousel'

function VisualContainer() {
  return (
    <div className="Carrousel">      
            <ImgPrincipal img={imgP}></ImgPrincipal>
            <Carrousel></Carrousel>
    </div>
  );
}

export default VisualContainer;