import logo from './logo.svg';
import imgP from './img/Casa.png';
import './App.css';
import ImgPrincipal from './ImgPrincipal';
import Carrousel from './Carrousel';
import InfoCard from './InfoCard';
import TitleInfo from './TitleInfo';
import DescriptionInfo from './DescriptionInfo';

function ProductoSeleccionado() {
    return (
      <div className="Carrousel">      
              <CarrouselButton></CarrouselButton> 
              <ImgCarrousel img={imgP}></ImgCarrousel>
              <ImgCarrousel img={imgP}></ImgCarrousel>
              <ImgCarrousel img={imgP}></ImgCarrousel>
              <ImgCarrousel img={imgP}></ImgCarrousel>
              <ImgCarrousel img={imgP}></ImgCarrousel>
              <CarrouselButton option="a"></CarrouselButton> 
      </div>
    );
  }
  
  export default Carrousel;