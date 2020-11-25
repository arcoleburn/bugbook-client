import { useState, useReducer } from 'react';
import AuthApiService from '../../services/auth-api-service';
import {
  Wrapper,
  EntryForm,
} from '../NewEntryForm/NewEntryForm.styles';

const initialFormState = {
  regUsername: '',
  regPassword: '',
  confirmPass: '',
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
    setError(null);
    const {
      regUsername,
      regPassword,
      confirmPass,
      email,
      firstName,
    } = state;

    const newUser = {
      username: regUsername,
      password: regPassword,
      email,
      first_name: firstName,
    };

    AuthApiService.postUser(newUser)
      .then((res) => {
        //should reset field values here
        props.onRegistrationSuccess();
      })
      .catch((res) => {
        setError({ error: res.error });
      });
  };
  return (
    <EntryForm onSubmit={handleSubmit}>
      <div>{error && <p>{error.error}</p>}</div>
      <label htmlFor="regUsername"> Username: </label>
      <input
        id="regUsername"
        name="regUsername"
        required
        type="text"
        onChange={onChange}
      ></input>
      <label htmlFor="regPassword" name="regPassword">
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
      <label htmlFor="email">Email:</label>
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
    </EntryForm>
  );
};

export default RegistrationForm;
