import img from './logo.svg';
import './CaracteristicInfoCard.css';
import IconInfoCard from './IconInfoCard'

function CaracteristicInfoCard({icons, number, item}) {
  return (         
    <div className="Caracteristic">
        <IconInfoCard icon={icons}></IconInfoCard>
        <div className="Caracteristic2">
            <h4 className="text1">{number}</h4>
            <h4 className="text2">{item}</h4>
        </div>
    </div>    
  );
}

export default CaracteristicInfoCard;