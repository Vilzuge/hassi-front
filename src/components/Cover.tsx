import { FunctionComponent } from 'react';
import cover from '../img/haessi_kansi.png';

const Cover: FunctionComponent = () => {
  return (
    <div className="cover-image-container">
      <img className="cover-image" src={cover} alt="Kansikuva"></img>
    </div>
  );
};

export default Cover;
