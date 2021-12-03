import { FunctionComponent } from 'react';
import cover from '../img/haessi_kansi.png';

const Cover: FunctionComponent = () => {
  return (
    <div>
      <img src={cover} alt="Kansikuva"></img>
    </div>
  );
};

export default Cover;
