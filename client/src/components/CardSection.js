import React from 'react';
import {CardElement} from 'react-stripe-elements';
import styled from 'styled-components'


class CardSection extends React.Component {
  render() {
    return (
      <label>        
        <FormLabel style={{base: {fontSize: '18px'}}} />
      </label>
    );
  }
};

export default CardSection;


const FormLabel = styled(CardElement)`
border-color: rgba(241,92,66,1);
border-width: 0.5px;
border-radius: 3px;
border-style: solid;
padding: 8px;
`

