import React from 'react';
import { injectStripe } from 'react-stripe-elements';
// import AddressSection from './AddressSection';
import CardSection from './CardSection';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CheckoutForm extends React.Component {
  state = { token: {} };
  handleSubmit = ev => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.

    this.props.stripe.createToken({ name: 'Jenny Rosen' }).then(({ token }) => {
      console.log('Received Stripe token:', token);
      this.props.handleToken(token);
    });

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    // this.props.handleToken(tokenHolder);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(connect(null, actions)(CheckoutForm));