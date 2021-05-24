import img from './logo.svg';
import './DescriptionInfo.css';

function DescriptionInfo({text}) {
  return (
    <div>      
        <h3 className="description">{text}</h3>
    </div>
  );
}

export default DescriptionInfo;