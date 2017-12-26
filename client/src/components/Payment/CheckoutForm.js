import React from 'react';
import { injectStripe } from 'react-stripe-elements';
// import AddressSection from './AddressSection';
import CardSection from './CardSection';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

class CheckoutForm extends React.Component {
  state = { token: {} };
  handleSubmit = async ev => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.

    this.props.stripe.createToken({ name: 'Jenny Rosen' }).then(({ token }) => {
      console.log(token);
      this.props.handleToken(token).then(() => {
        console.log('this.props.auth', this.props.auth);
        if (this.props.auth.status == 'paid') {
          this.props.history.push('/courses');
        }
      });
    });

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    // this.props.handleToken(tokenHolder);
  };

  render() {
    return (
      <form style={{ width: '300px' }} onSubmit={this.handleSubmit}>
        <CardSection />
        <JoinButton>Subscribe</JoinButton>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default injectStripe(connect(mapStateToProps, actions)(withRouter(CheckoutForm)));

const JoinButton = styled.button`
  background: rgba(224, 82, 160, 1);
  background: -moz-linear-gradient(left, rgba(224, 82, 160, 1) 0%, rgba(241, 92, 66, 1) 100%);
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(224, 82, 160, 1)),
    color-stop(100%, rgba(241, 92, 66, 1))
  );
  background: -webkit-linear-gradient(left, rgba(224, 82, 160, 1) 0%, rgba(241, 92, 66, 1) 100%);
  background: linear-gradient(to right, rgba(224, 82, 160, 1) 0%, rgba(241, 92, 66, 1) 100%);
  text-align: center;
  padding: 13px;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  width: 160px;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20%;
`;
