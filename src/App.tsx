import React from 'react';
import './App.css';
import AmountSelection from './components/AmountSelection';
import ContactFields from './components/ContactFields';
import Cover from './components/Cover';
import Footer from './components/Footer';
import HassiInfo from './components/HassiInfo';
import PaymentSelection from './components/PaymentSelection';
import './css/skeleton.css';

const App: React.FC = () => {
  return (
    <div className="App container">
      <Cover />
      <div className="page">
        <HassiInfo />
        <AmountSelection />
        <ContactFields />
        <PaymentSelection />
        <Footer />

        <p>Maksa verkossa!!!!!!!!!!!</p>

        <p>2021 © PoWi RyToimitusehdot</p>
      </div>
    </div>
  );
};

export default App;
