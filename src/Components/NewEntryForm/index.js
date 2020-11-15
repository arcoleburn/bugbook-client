import React, { useReducer, useState } from 'react';
import Header from '../Header';
import Date from '../Date';
import { EntryForm } from './NewEntryForm.styles';
import ApiService from '../../services/bugbook-api-service';
import jwt from 'jsonwebtoken'
import TokenService from '../../services/token.service'
import userInfoService from '../../services/user-info-service';

const initialFormState={
  rating:0,
  hours:0,
  journal:''
}
function reducer(state, {field, value}){
  return{
    ...state,
    [field]:value
  }
}




const NewEntry = (props) => {
  const [state,dispatch] = useReducer(reducer, initialFormState)
 
  const onChange = (e)=>{
    dispatch({field:e.target.name, value:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let newEntry={
      day_rating: (state.rating),
      deep_hours: (state.hours),
      journal_entry:state.journal
    }
console.log('new entry', newEntry)
ApiService.postEntry( newEntry)
props.setEntries([...props.entries], newEntry)
props.history.push('./timeline')
  };
  return (
    <>
      <Date />

      <EntryForm>
        <label htmlFor="rating">How was today? (-2/+2 scale)</label>
        <select
          name="rating"
          id="rating"
          defaultValue={0}
          onChange={onChange}
        >
          <option value="-2">-2</option>
          <option value="-1">-1</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <label htmlFor="hours">
          {' '}
          How many hours did you spend creatively today?{' '}
        </label>
        <input
          type="number"
          name="hours"
          id="hours"
          step=".5"
          min="0"
          onChange={onChange}
        />
        <label htmlFor="journal"> Tell me about today:</label>
        <textarea name="journal" id="journal" onChange={onChange}></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </EntryForm>
    </>
  );
};

NewEntry.defaultProps = {
  rating: 0,
};
export default NewEntry;
