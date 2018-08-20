import React, { Component } from 'react';
import './index.css'
import chip from './image/sim-card-chip.png'
import visa from './image/visaLogo.jpg'


const CreditCard = () => {
  return(
  <div className="credit-card-container">
    <h1>CREDIT CARD</h1>
    <img src={chip} className="chip-img"/>
    <div className="credit-card_content">
      <div className="credit-card-numbers">
        <h2 className="credit-card-rip">7253 3256 7895 1245</h2>
        <div className="credit-card-code">
          <h2>5422</h2>
          <h2>11/50</h2>
        </div>
        <h2 className="holder-name">CARDHOLDER</h2>
      </div>
      <div className="visa-logo">
        <img src={visa}/>
      

      </div>
      
    </div>
    

  </div>
  );
}
class App extends Component {
  render() {
    return (
      <div>
        <CreditCard/>
      </div>
      
    );
  }
}

export default App;
