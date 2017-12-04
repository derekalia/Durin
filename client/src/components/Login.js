import React from 'react';

import styled from 'styled-components'


class Login extends React.Component {
  render() {
    return (
      <LoginHolder>
        <div>Login</div>
        <div></div>
        <a href="/auth/google">Sign in with Google</a>
        <div>Sign in with Github</div>
        <div>Email</div>        
        <div>Password</div>        
        <div>Login</div>
        <div>Dont have an account? Sign Up</div>
        <div>Forgot Password?</div>
      </LoginHolder>
    );
  }
};

export default Login;


const LoginHolder = styled.div`
margin-top:30px
`

