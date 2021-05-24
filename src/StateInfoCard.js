import img from './logo.svg';
import './StateInfoCard.css';

function StateInfoCard({Text}) {
  return (         
    <div className="State">
        <h4 className="TextState">{Text}</h4>      
    </div>    
  );
}

export default StateInfoCard;