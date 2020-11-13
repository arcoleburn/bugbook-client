'use strict';

import { useState, useReducer } from 'react';
import AuthApiService from '../../services/auth-api-service';

const initialFormState = {
  regUsername: '',
  regPassword: '',
  confrimPass: '',
  email: '',
  firstName: '',
};
function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const RegistrationForm = (props) => {
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialFormState);

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      regUsername,
      regPassword,
      confrimPass,
      email,
      firstName,
    } = state;
    setError(null);
    const newUser = {
      username: regUsername,
      password: regPassword,
      email,
      first_name: firstName,
    };
    console.log(newUser);

    AuthApiService.postUser(newUser)
      .then((user) => {
        regUsername.value = '';
        regPassword.value = '';
        confrimPass.value = '';
        email.value = '';
        firstName.value = '';
      })
      .then(props.onRegistrationSuccess())
      .catch((res) => {
        setError({ error: res.error });
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>{error && <p>{error}</p>}</div>
      <label htmlFor="regUsername"> Username: </label>
      <input
        id="regUsername"
        name="regUsername"
        required
        type="text"
        onChange={onChange}
      ></input>
      <label htmlFor="regPassword" name="regPassword">
        {' '}
        Password:
      </label>
      <input
        id="regPassword"
        name="regPassword"
        type="password"
        required
        onChange={onChange}
      />
      <label htmlFor="confirmPass">Confirm Password:</label>
      <input
        id="confirmPass"
        name="confirmPass"
        type="password"
        required
        onChange={onChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={onChange}
      />
      <label htmlFor="firstName">What should we call you?</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={onChange}
      />
      <button type="submit"> Register </button>
    </form>
  );
};

export default RegistrationForm;
