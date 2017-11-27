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
          <HeaderItem>
            <Link to="/courses">Courses</Link>
          </HeaderItem>,
          <HeaderItem>
            <Link to="/add">Add Course</Link>
          </HeaderItem>,
          <HeaderItem>{this.props.auth.name}</HeaderItem>,
          <HeaderItem>
            <a href="/api/logout">Logout</a>
          </HeaderItem>
        ];
    }
  }

  render() {
    return (
      <HeaderHolder name="HeaderHolder">
        <HeaderTitle name="HeaderTitle">
          <Link to={this.props.auth ? '/courses' : '/'}>Blockheads</Link>
        </HeaderTitle>
        <HeaderItemHolder>{this.renderContent()}</HeaderItemHolder>
      </HeaderHolder>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);

const HeaderHolder = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #d8d8d8;
  justify-content: space-between;
  margin-left: -8px;
  align-items: center;
`;
const HeaderTitle = styled.div`
  font-size: 23px;
  color: black;
  text-decoration: none;
  margin-left: 10px;
`;

const HeaderItem = styled.div`
  width: 100px;
`;

const HeaderItemHolder = styled.div`
  display: flex;
  flex-direction: row;
`;
