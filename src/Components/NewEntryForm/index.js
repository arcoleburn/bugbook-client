import React from 'react';
import Header from '../Header';
import Date from '../Date'
import { EntryForm } from './NewEntryForm.styles'

const NewEntry = (props) => {  

  return (
  <>
    <Header/>
    <Date/>

    <EntryForm>
    
      <label htmlFor="rating">How was today? (-2/+2 scale)</label>
      <select name="rating" id="rating" defaultValue={0}>
        <option value="-2">-2</option>
        <option value="-1">-1</option>
        <option value="0"  >
          0
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <label htmlFor="hours">
        {' '}
        How many hours did you spend creatively today?{' '}
      </label>
      <input type="number" name="hours" id="hours" step='.5' min='0' />
      <label htmlFor="journal"> Tell me about today:</label>
      <textarea name="journal" id="journal"></textarea>
    <button type='submit'>Submit</button>
    
    </EntryForm>
    </>
  );
};

NewEntry.defaultProps = {
  rating:0
} 
export default NewEntry