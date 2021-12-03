import { FunctionComponent } from 'react';


const AmountSelection: FunctionComponent = (props) => {
  return (
    <>
      <p>Montako Hässiä laitetaan?</p>
      
      <p>Hinta yhteensä: 11,00 tai siis: 11 €</p>
      <p>sisältää postikulut 3 € (+2 € / seuraavat lehdet)</p>
      <p>
        Mikäli olet kiinnostunut aiempien vuosien lehdistä, ota rohkeasti
        yhteyttä hassi@powi.fi !
      </p>
    </>
  );
};

export default AmountSelection;
