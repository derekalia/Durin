import React from 'react';
import { StripeProvider } from 'react-stripe-elements';
import PaymentForm from './PaymentForm';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Payment extends React.Component {
  render() {
    return (
      <div>
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default Payment;
