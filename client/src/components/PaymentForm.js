import React from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm'

class PaymentForm extends React.Component {
  render() {
    return (
      <div>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    );
  }
}

export default PaymentForm;
