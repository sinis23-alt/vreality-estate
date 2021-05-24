import logo from './logo.svg';
import imgP from './img/Casa.png';
import './App.css';
import ImgPrincipal from './ImgPrincipal';
import Carrousel from './Carrousel';
import InfoCard from './InfoCard';
import TitleInfo from './TitleInfo';
import DescriptionInfo from './DescriptionInfo';

function App() {
  return (
    <div className="container1">
      <div className="container2">
        <div className="container3">
          <div>
             
            <ImgPrincipal img={imgP}></ImgPrincipal>
            <Carrousel></Carrousel>
            
          </div>

          <InfoCard></InfoCard>

        </div>
        <TitleInfo text="Ubicación"></TitleInfo>
        {/** 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127450.10983615211!2d-76.59570455903695!3d3.3950618692137358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1621881307281!5m2!1ses!2sco" 
        width="10rem" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        */}
        <iframe id="inlineFrameExample" title="Inline Frame Example" width="100%" height="300" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik%22%3E"> </iframe>
        
        <TitleInfo text="Descripción"></TitleInfo>
        
        <DescriptionInfo text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus 
        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
        eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus 
        est Lorem ipsum dolor sit amet"></DescriptionInfo>

      </div>
    </div>
  );
}

export default App;
