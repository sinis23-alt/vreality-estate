import img from './logo.svg';
import './AddressInfoCard.css';

function AddressInfoCard({Text}) {
  return (         
    <div>
        <h4 className="Text">{Text}</h4>      
    </div>    
  );
}

export default AddressInfoCard;