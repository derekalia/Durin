import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class UserSettings extends React.Component {
  state = {};

  cancelSub = () => {
    console.log('here', this.props.auth);
    axios.post('/api/stripe/del', this.props.auth);
  };

  render() {
    return (
      <OuterBox>
        UserSettings
        <button>upload avatar</button>
        <div>Change Name</div>
        <input />
        <div>Membership Information</div>
        <div>Change Payment Info</div>
        <div>
          Cancel Subscription
          <button onClick={this.cancelSub}>Cancel</button>
        </div>
        <div>{this.props.auth !== null && this.props.auth.name}</div>
        <div>{this.props.auth !== null && this.props.auth.status}</div>
        <div>{this.props.auth !== null && this.props.auth.plan}</div>
      </OuterBox>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(UserSettings);

const OuterBox = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;
