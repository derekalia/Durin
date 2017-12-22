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
  position: absolute;  
  background-color: #cecece;  
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
`;
const FooterLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  margin-left: 30px;
`;

const FooterRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  flex: 1;
  margin-right: 30px;
`;

const FooterItem = styled.div`
  flex: 1;
`;
