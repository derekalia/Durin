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
        return <div>loading</div>;
      case false:
        return [
          <HeaderItem>
            <LinkStyle to="/courses">Courses</LinkStyle>
          </HeaderItem>,
          <HeaderItem>
            <LinkStyle to="/pricing">Pricing</LinkStyle>
          </HeaderItem>,
          <HeaderItem>
            <ALinkStyle href="/auth/google">Login</ALinkStyle>
          </HeaderItem>,
          <HeaderItem>
            <JoinButton>
              {' '}
              <LinkStyle style={{ color: 'white', fontWeight: 'bold' }} to="/join">
                Join
              </LinkStyle>
            </JoinButton>
          </HeaderItem>
        ];
      default:
        return [
          <HeaderItem>
            <LinkStyle to="/courses">Courses</LinkStyle>
          </HeaderItem>,
          <HeaderItem>
            <LinkStyle to="/add">Add Course</LinkStyle>
          </HeaderItem>,
          <HeaderItem>{this.props.auth.name}</HeaderItem>,
          <HeaderItem>
            <ALinkStyle href="/api/logout">Logout</ALinkStyle>
          </HeaderItem>
        ];
    }
  }

  render() {
    return (
      <HeaderHolder name="HeaderHolder">
        <HeaderTitle name="HeaderTitle">
          <LogoLinkStyle to={this.props.auth ? '/courses' : '/'}>qkBoot</LogoLinkStyle>
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
  background-color: white;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderItemHolder = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  &:hover {
    color: red;
  }
`;

const ALinkStyle = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
  &:hover {
    color: red;
  }
`;

const LogoLinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 30px;
`;

const JoinButton = styled.div`
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
  padding: 10px;
  border-radius: 10px;
  width: 61px;
`;
