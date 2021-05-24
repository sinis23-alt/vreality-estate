import arrowAfter from './img/after.png';
import arrowBefore from './img/before.png';
import './CarrouselButton.css';


const getOption = option => {
    const state = option === "a" ? arrowAfter : arrowBefore;    
    return state
};

function CarrouselButton({option}) {
  return (
    <div>      
        <button className="CarrouselButton"><img className="ArrowCB" src={getOption(option)}></img></button>       
    </div>
  );
}

export default CarrouselButton;