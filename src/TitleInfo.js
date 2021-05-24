import img from './logo.svg';
import './TitleInfo.css';

function TitleInfo({text}) {
  return (
    <div>      
        <h3 className="title">{text}</h3>
    </div>
  );
}

export default TitleInfo;