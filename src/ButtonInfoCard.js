import img from './logo.svg';
import './ButtonInfoCard.css';

function ButtonInfoCard({text}) {
  return (
    <div>      
        <button className="button">{text}</button>
    </div>
  );
}

export default ButtonInfoCard;