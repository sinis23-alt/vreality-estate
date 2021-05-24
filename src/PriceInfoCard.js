import img from './logo.svg';
import './PriceInfoCard.css';

function PriceInfoCard({Text}) {
  return (         
    <div>
        <strong><h3 className="TextPrice">${Text}</h3></strong>
    </div>    
  );
}

export default PriceInfoCard;