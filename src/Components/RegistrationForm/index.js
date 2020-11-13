'use strict';

const { useState, useReducer } = require('react');

const initialFormState={
    regUsername:'',
    regPassword:'',
    confrimPass:'',
    email:'',
    firstName:''
  }
  function reducer(state, {field, value}){
    return{
      ...state,
      [field]:value
    }
  }

const RegistrationForm = (props) => {
  const [error, setError] = useState(null);
  const [state,dispatch] = useReducer(reducer, initialFormState)

  const onChange = (e)=>{
    dispatch({field:e.target.name, value:e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>{error && <p>{error}</p>}</div>
      <label htmlFor="regUsername"> Username: </label>
      <input id="reg-username" required type="text" onChange={onChange}></input>
      <label htmlFor="reg-password"> Password:</label>
      <input id="reg-password" type="password" required onChange={onChange}/>
      <label htmlFor="confirm-pass">Confirm Password:</label>
      <input id="confirm-pass" type="password" required onChange={onChange}/>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" onChange={onChange}/>
      <label htmlFor="firstname">What should we call you?</label>
      <input type="text" id="firstname" onChange={onChange}/>
      <button type= 'submit'> Register </button>
    </form>
  );
};
