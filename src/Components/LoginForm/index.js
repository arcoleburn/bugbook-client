import React, { useState, useEffect } from 'react';

import TokenService from '../../services/token.service';
import AuthApiService from '../../services/auth-api-service';
import userInfoService from '../../services/user-info-service';
import {
  EntryForm,
  Wrapper,
} from '../NewEntryForm/NewEntryForm.styles';
const LoginForm = (props) => { //should turn this into a controled form 
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
        if (!res.ok) {
          console.log('bad res')
          return res.json().then((error) => Promise.reject(error));
        }
        username.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        //userInfoService.saveUserId(res.userId);
        //userInfoService.saveUserFirstName(res.firstName)
        props.onLoginSuccess();
      })
      .catch((res) => {
        console.log('error caught')
        setError({ error: res.error });
      });
  };

  return (
    <Wrapper>
      <EntryForm onSubmit={handleSubmitJwtAuth}>
        {error && <div>{error.error}</div>}
        <label htmlFor="username"> Username: </label>
        <input required type="text" id="username" />
        <label htmlFor="password">Password: </label>
        <input required id="password" type="password" />
        <button type="submit"> Login </button>
      </EntryForm>
    </Wrapper>
  );
};

export default LoginForm;
