import React, { useState, useEffect } from 'react';

import TokenService from '../../services/token.service';
import AuthApiService from '../../services/auth-api-service';

const LoginForm = (props) => {
  console.log('login form props:', props)
  const [error, setError] = useState(null);

  const handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    setError(null);
    const { username, password } = ev.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        props.updateId(res.userId)
        props.onLoginSuccess()
      })
      .catch((res) => {
        setError({ error: res.error });
      });
  };

  return (
      <form onSubmit={handleSubmitJwtAuth}>
          <label htmlFor='username'> Username: </label>
          <input required type='text' id='username'/>
          <label htmlFor= 'password'>Password: </label>
          <input required id='password' type='password'/>
          <button type='submit'> Login </button>
      </form>
  )

};

export default LoginForm