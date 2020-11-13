import React from 'react';

import LoginForm from '../../Components/LoginForm';

const LoginPage = (props) => {
    console.log('login page props:', props)
  
    const handleLoginSuccess = () => {
      console.log('login success')
    const { location, history } = props;
    const destination = (location.state || {}).from || '/';
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