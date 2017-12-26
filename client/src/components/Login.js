import React from 'react';

import styled from 'styled-components';
import googleAuth from '../media/btn_google_signin_light_normal_web.svg';
import GithubAuth from '../media/githubAuth.svg';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <JoinHolder>
        <Title>Login</Title>
        <JoinBox>                
        <AuthHolder>
        <a href="/auth/google">
          <ButtonImg src={googleAuth} />
        </a>
        <a href="/auth/google">
          <ButtonImg src={GithubAuth} />
        </a>
        </AuthHolder>
        <LineBreak />
        <InputHolder>
          <InputTitle>Email</InputTitle>
          <Input />
        </InputHolder>        
        <InputHolder>
          <InputTitle>Password</InputTitle>
          <Input />
        </InputHolder>
        

        <JoinButton><JoinText>Enter</JoinText></JoinButton>
        <div style={{ margin: '20px'}}>Dont have an account? <Link to="/join">Sign Up</Link></div>
        <div>Forgot Password?</div>
        </JoinBox>        
      </JoinHolder>
    );
  }
}

export default Login;

const LoginHolder = styled.div`
  margin-top: 30px;
`;

const JoinHolder = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: -webkit-fill-available;
`;

const Title = styled.div`
  margin: 40px;
  font-size: 30px;
`;

const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
`;

const InputTitle = styled.div`
  font-size: 18px;
`;

const Input = styled.input`
  font-size: 18px;
  width: 100%;
`;

const LineBreak = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    height: .5px;
    border: .5px solid black;
    border-radius: 9px;
}
`;

const ButtonImg = styled.img`
width:220px;    
}
`;

const JoinBox = styled.div`
width: 450px;
display: flex;
flex-direction: column;
height: -webkit-fill-available;
align-items: center;
`;
const AuthHolder = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`;



const JoinButton = styled.button`
text-decoration: none;
margin-top: 20px;
background: rgba(75, 125, 179, 1);
background: -moz-linear-gradient(left, rgba(75, 125, 179, 1) 0%, rgba(34, 142, 242, 1) 100%);
background: -webkit-gradient(
  left top,
  right top,
  color-stop(0%, rgba(75, 125, 179, 1)),
  color-stop(100%, rgba(34, 142, 242, 1))
);
background: -webkit-linear-gradient(left, rgba(75, 125, 179, 1) 0%, rgba(34, 142, 242, 1) 100%);
background: -o-linear-gradient(left, rgba(75, 125, 179, 1) 0%, rgba(34, 142, 242, 1) 100%);
background: -ms-linear-gradient(left, rgba(75, 125, 179, 1) 0%, rgba(34, 142, 242, 1) 100%);
background: linear-gradient(to right, rgba(75, 125, 179, 1) 0%, rgba(34, 142, 242, 1) 100%);
text-align: center;
padding: 10px;
border-radius: 10px;
width: 80px;
border-width:0px
`;

const JoinText = styled.div`
color: white;
font-size: 20px;
font-family: 'Lato',sans-serif;
`;
