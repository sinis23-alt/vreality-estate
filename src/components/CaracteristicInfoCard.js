import './CaracteristicInfoCard.css';

function CaracteristicInfoCard({icons, number, item}) {
  return (         
    <div className="j-Caracteristic">
        <img className="j-IconInfoCard" src={icons}></img>
        <div className="j-Caracteristic2">
            <h4 className="j-text1">{number}</h4>
            <h4 className="j-text2">{item}</h4>
        </div>
    </div>    
  );
}

export default CaracteristicInfoCard;