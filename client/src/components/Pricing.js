import React from 'react';
import Payment from './Payment'
class Pricing extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div>Pricing</div>
        <div>$39/month</div>    
        <div><Payment/></div>            
      </div>
    );
  }
}

export default Pricing;
