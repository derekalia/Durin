import React from 'react';
import Payment from './Payment/Payment';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Pricing extends React.Component {
  state = {};

  renderPaymentInfo() {
    //if signed up show payment info
    if (this.props.auth) {
      return (
        <PaymentHolder>
          <Payment />
        </PaymentHolder>
      );
    } else {
      //if not just have a sign up button that takes them to the join section
      return (
        <JoinButton to="/join">
          <JoinText>Start</JoinText>
        </JoinButton>
      );
    }
  }

  render() {
    return (
      <Holder>
        <MiddleBox>
          <PriceBox>
            <Price>$42</Price>/month
          </PriceBox>
          <Text>for unlimited access to videos and forums</Text>
          {/* <JoinButton to="/pricing/start"><JoinText>Start</JoinText></JoinButton> */}
          {this.renderPaymentInfo()}
        </MiddleBox>
        <Terms>By subscribing to durin.io you agree to the terms and conditions.</Terms>
      </Holder>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Pricing);

const Holder = styled.div``;

const Terms = styled.div`
text-align:center;
`;



const PaymentHolder = styled.div`
  /* width:350px; */
  margin-top: 20px;
`;

const MiddleBox = styled.div`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PriceBox = styled.div`
  font-size: 60px;
  flex-direction: row;
  display: flex;
  align-items: baseline;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 90px;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

const JoinButton = styled(Link)`
  text-decoration: none;
  margin-top: 20px;
  background: rgba(75, 125, 179, 1);
  background: -moz-linear-gradient(left, rgba(75, 125, 179, 1) 0%, rgba(34, 142, 242, 1) 100%);
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(75, 125, 179, 1)),
    color-stop(100%, rgba(34, 142, 242, 1))
  );
  background: -webkit-linear-gradient(left, rgba(75, 125, 179, 1) 0%, rgba(34, 142, 242, 1) 100%);
  background: -o-linear-gradient(left, rgba(75, 125, 179, 1) 0%, rgba(34, 142, 242, 1) 100%);
  background: -ms-linear-gradient(left, rgba(75, 125, 179, 1) 0%, rgba(34, 142, 242, 1) 100%);
  background: linear-gradient(to right, rgba(75, 125, 179, 1) 0%, rgba(34, 142, 242, 1) 100%);
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  width: 80px;
`;

const JoinText = styled.div`
  color: white;
  font-size: 20px;
`;
