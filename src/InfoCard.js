import './InfoCard.css';
import AddressInfoCard from './AddressInfoCard';
import PriceInfoCard from './PriceInfoCard';
import CaracteristicInfoCard from './CaracteristicInfoCard';
import InputInfoCard from './InputInfoCard';
import ButtonInfoCard from './ButtonInfoCard';
import ExtraInfoCard from './ExtraInfoCard';
import TitleInfoCard from './TitleInfoCard';
import imgBed from './img/Bed.png';
import imgBath from './img/bath.png';
import imgSize from './img/Size.png';

function InfoCard() {
  return (
    <div className="InfoCard">      
        <TitleInfoCard text="Casa Lujosa" textState="Negociable"></TitleInfoCard>  
        <AddressInfoCard Text="Cl. 52 #3-29, Cali, Valle del Cauca"></AddressInfoCard>
        <PriceInfoCard Text="120.000.000"></PriceInfoCard>
        <div className="contentCarac">
          <CaracteristicInfoCard icons={imgBed} number="4" item="habitaciones"></CaracteristicInfoCard>
          <CaracteristicInfoCard icons={imgBath} number="2" item="baños"></CaracteristicInfoCard>
          <CaracteristicInfoCard icons={imgSize} number="500" item="m"></CaracteristicInfoCard>
        </div>
        <InputInfoCard message="Hola, Estoy interesado, por favor comunícate conmigo. ¡Gracias!"></InputInfoCard>
        <ButtonInfoCard text="Contactar"></ButtonInfoCard>
        <ExtraInfoCard text="Quiero que me contacten"></ExtraInfoCard>
    </div>
  );
}

export default InfoCard;