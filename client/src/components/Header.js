import React, { propTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import durin from '../media/durin_black.svg';
import DropdownMenu from 'react-dd-menu';
import '../../node_modules/react-dd-menu/dist/react-dd-menu.css';

class Header extends React.Component {
  state = { isMenuOpen: false };

  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  close = () => {
    this.setState({ isMenuOpen: false });
  };

  click = () => {
    console.log('You clicked an item');
  };

  renderContent() {
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
            <LinkStyle to="/login">Login</LinkStyle>
          </HeaderItem>,
          <HeaderItem>
            <LinkStyle style={{ color: 'white', fontWeight: 'bold' }} to="/join">
              <JoinButton>Join</JoinButton>
            </LinkStyle>
          </HeaderItem>
        ];
      default:
        const menuOptions = {
          isOpen: this.state.isMenuOpen,
          close: this.close,
          toggle: <HeaderItemButton onClick={this.toggle}>{this.props.auth.name}</HeaderItemButton>,
          align: 'center'
        };
        return (
          <HeaderItemHolder>
            <HeaderItem>
              <LinkStyle to="/courses">Courses</LinkStyle>
            </HeaderItem>
            {this.props.auth.status !== 'paid' && (
              <HeaderItem>
                <LinkStyle to="/pricing">Pricing</LinkStyle>
              </HeaderItem>
            )}
            <HeaderItem>
              <LinkStyle to="/add">Add Course</LinkStyle>
            </HeaderItem>
            <HeaderItem>
              <DropdownMenu {...menuOptions}>
                <div style={{ width: '100px' }}>
                  <div>
                  <ALinkStyle href="/account">Account</ALinkStyle>
                  </div>
                  <div>
                    <ALinkStyle href="/api/logout">Logout</ALinkStyle>
                  </div>
                </div>
              </DropdownMenu>
            </HeaderItem>            
          </HeaderItemHolder>
        );
    }
  }

  render() {
    return (
      <HeaderHolder name="HeaderHolder">
        <LeftHolder>
          <Logo src={durin} />
          <HeaderTitle name="HeaderTitle">
            <LogoLinkStyle to={this.props.auth ? '/courses' : '/'}>Durin</LogoLinkStyle>
          </HeaderTitle>
        </LeftHolder>
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
  position: fixed;
  top: 0;
  width: 100%;
  // height: 50px;
  background-color: white;
  justify-content: space-between;
  // margin-left: -8px;
  align-items: center;
`;
const HeaderTitle = styled.div`
  font-size: 23px;
  color: black;
  text-decoration: none;

  align-self: center;
`;

const HeaderItem = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderItemButton = styled.button`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  font-family: 'Lato', sans-serif;
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
const Logo = styled.img`
  margin: 10px;
  width: 45px;
  height: 45px;
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

const LeftHolder = styled.div`
  display: flex;
  flex-direction: row;
`;
