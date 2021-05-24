import img from './logo.svg';
import './InputInfoCard.css';

function InputInfoCard({message}) {
  return (
    <div>      
        <input className="textBox" placeholder={message}></input>        
    </div>
  );
}

export default InputInfoCard;