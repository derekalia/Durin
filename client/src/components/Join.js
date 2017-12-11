import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import googleAuth from '../media/btn_google_signin_light_normal_web.svg'
import GithubAuth from '../media/githubAuth.svg'

class Join extends React.Component {
  render() {
    return (
      <JoinHolder>
        <Title>Sign Up</Title>
        <JoinBox>
          <AuthHolder>            
            <a href="/auth/google"><ButtonImg src={googleAuth}/></a>
            <a href="/auth/google"><ButtonImg src={GithubAuth}/></a>
            {/* <AuthServiceButton href="/auth/google">Sign in with Github</AuthServiceButton> */}
          </AuthHolder>
          <LineBreak />
          <InputHolder>
            <InputTitle>Email</InputTitle>
            <Input />
          </InputHolder>
          <InputHolder>
            <InputTitle>Username</InputTitle>
            <Input />
          </InputHolder>
          <InputHolder>
            <InputTitle>Password</InputTitle>
            <Input />
          </InputHolder>
          <InputHolder>
            <InputTitle>Re-Password</InputTitle>
            <Input />
          </InputHolder>

          <JoinButton to="/join">
            <JoinText>Register</JoinText>
          </JoinButton>
        </JoinBox>
      </JoinHolder>
    );
  }
}

export default Join;

const Title = styled.div`
  margin: 40px;
  font-size: 30px;
`;
const JoinHolder = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: -webkit-fill-available;
`;

const JoinBox = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
  align-items: center;
`;

const JoinButton = styled(Link)`
  text-decoration: none;
  margin-top: 20px;
  background: linear-gradient(to right, rgba(75, 125, 179, 1) 0%, rgba(34, 142, 242, 1) 100%);
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  width: 100px;
  &:hover {
    color: #7795f8;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`;

const JoinText = styled.div`
  color: white;
  font-size: 20px;
`;

const AuthServiceButton = styled.a`
  text-align: center;
  text-decoration: none;
  padding: 10px;
  background-color: rgb(38, 140, 238);
  color: white;
  font-size: 16px;
`;

const AuthHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
