import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Header extends React.Component {
  state = {};

  renderContent() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login</a>;
      default:
        return [
          <li key="1">{this.props.auth.name}</li>,
          <li key="2">
            <Link to="/add">Add Course</Link>
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <HeaderHolder>
        <div>
          <Link to={this.props.auth ? '/courses' : '/'}>Blockheads</Link>
        </div>
        <div>Login</div>
        <div>{this.renderContent()}</div>
      </HeaderHolder>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);

const HeaderHolder = styled.div`
  display:flex,
  flex-direction:row
`;
