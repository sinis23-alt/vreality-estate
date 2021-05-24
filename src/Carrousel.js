import imgP from './img/Casa.png';
import './Carrousel.css';
import CarrouselButton from './CarrouselButton'
import ImgCarrousel from './ImgCarrousel'

function Carrousel() {
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