import imgBed from './img/Bed.png';
import imgBath from './img/bath.png';
import imgSize from './img/Size.png';
import imgHeart from './img/corazon.png';
import './IconInfoCard.css';

function IconInfoCard({icon}) {
  return (
    <div>      
        <img className="IconInfoCard" src={icon}></img>
    </div>
  );
}

export default IconInfoCard;