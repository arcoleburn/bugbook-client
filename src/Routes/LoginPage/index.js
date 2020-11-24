import React from 'react';

import LoginForm from '../../Components/LoginForm';
import TokenService from '../../services/token.service';
import UserInfoService from '../../services/user-info-service'
import jwt from 'jsonwebtoken'
import userInfoService from '../../services/user-info-service';
import { Link } from 'react-router-dom';
import { Wrapper } from './LoginPage.styles';
const LoginPage = (props) => {
    const handleLoginSuccess = () => {
    const { location, history } = props;
    const destination = (location.state || {}).from || '/home';

    props.setUserId(jwt.decode(TokenService.getAuthToken()).userId)
    props.setFirstName(jwt.decode(TokenService.getAuthToken()).firstName)
    
    history.push(destination);
  };

  return (
    <Wrapper>
      <h2> Login</h2>
      <LoginForm onLoginSuccess={handleLoginSuccess} updateId={props.updateId}/>{' '}
      <Link to='/register'> No Account? Register here!</Link> 
    </Wrapper>
  );
};

LoginPage.defaultProps = {
  location: {},
  history: {
    push: () => {},
  },
};


export default LoginPage