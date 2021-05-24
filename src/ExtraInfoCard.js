import img from './logo.svg';
import './ExtraInfoCard.css';

function ExtraInfoCard({text}) {
  return (
    <div className="Container">      
        <h3 className="info">{text}</h3>
    </div>
  );
}

export default ExtraInfoCard;