import imgH from './img/corazon.png';
import './TittleInfoCard.css';
import StateInfoCard from './StateInfoCard'
import IconInfoCard from './IconInfoCard'

function TittleInfoCard({text, textState}) {
  return (
    <div className="TittleInfoCard">      
        <div className="content">
            <strong><h2>{text}</h2></strong>
            <StateInfoCard Text={textState}></StateInfoCard>
        </div>
        <img className="icon" src={imgH}></img>
    </div>
  );
}

export default TittleInfoCard;