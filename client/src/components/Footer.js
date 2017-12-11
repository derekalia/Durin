import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Footer extends React.Component {
  render() {
    return (
      
      <FooterHolder name="Footer">
        <FooterLeft name="FooterLeft">
          <FooterItem>Courses</FooterItem>
          <FooterItem>Help</FooterItem>
          <FooterItem>Twitter</FooterItem>
        </FooterLeft>

        <FooterRight name="FooterRight">Durin © 2017</FooterRight>
      </FooterHolder>
      
    );
  }
}

export default Footer;

const FooterHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 60px;
  background-color: #cecece;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: -8px;
`;
const FooterLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
`;

const FooterRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  flex: 1;
`;

const FooterItem = styled.div`
  flex: 1;
`;
