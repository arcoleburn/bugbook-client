import React from 'react';

import LoginForm from '../../Components/LoginForm';
import TokenService from '../../services/token.service';
import UserInfoService from '../../services/user-info-service'
import jwt from 'jsonwebtoken'
import userInfoService from '../../services/user-info-service';
const LoginPage = (props) => {
  
    const handleLoginSuccess = () => {
    
    const { location, history } = props;
    const destination = (location.state || {}).from || '/';

    props.setUserId(jwt.decode(TokenService.getAuthToken()).userId)
    props.setFirstName(jwt.decode(TokenService.getAuthToken()).firstName)
    
    history.push(destination);
  };

  return (
    <>
      <h2> Login</h2>
      <LoginForm onLoginSuccess={handleLoginSuccess} updateId={props.updateId}/>{' '}
    </>
  );
};

LoginPage.defaultProps = {
  location: {},
  history: {
    push: () => {},
  },
};


export default LoginPage