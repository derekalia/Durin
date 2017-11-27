import React from 'react';
import styled from 'styled-components';


class Landing extends React.Component {
  state = {};

  render() {
    return (
      <LandingHolder>
        <LandingHolderText>Landing</LandingHolderText>        
      </LandingHolder>
    );
  }
}

export default Landing;


const LandingHolder = styled.div`
display:flex;
justify-content: center;
margin-top: 50px;
`
const LandingHolderText = styled.div`


`