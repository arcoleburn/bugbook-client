import React, { useState, useEffect } from 'react';

import DatePage from '../Date';
import { EntryForm, Wrapper } from './NewEntryForm.styles';

import ApiService from '../../services/bugbook-api-service';

const NewEntry = (props) => {
  const { entries } = props;

  const [rating, setRating] = useState(0);
  const [hours, setHours] = useState(0);
  const [entry, setEntry] = useState('');

  let currentEntry;
  if (entries.length > 0 && props.edit) {
    currentEntry = entries[0];
  }

  useEffect(() => {
    if (props.edit) {
      let { day_rating, deep_hours, journal_entry } = currentEntry;
      setRating(day_rating);
      setHours(deep_hours);
      setEntry(journal_entry);
    }
  }, [props.edit, currentEntry]);

  const onChange = (e) => {
    e.target.name === 'rating'
      ? setRating(e.target.value)
      : e.target.name === 'hours'
      ? setHours(e.target.value)
      : setEntry(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newEntry = {
      day_rating: rating,
      deep_hours: hours,
      journal_entry: entry,
    };
    ApiService.postEntry(newEntry).then((x) => {
      props.setEntries([...entries, x]);
      props.history.push('/timeline');
    });
  };
  let handleEdit;
  handleEdit = (e) => {
    e.preventDefault();
    let newEntry = {
      day_rating: rating,
      deep_hours: hours,
      journal_entry: entry,
    };
    ApiService.editEntry(currentEntry.id, newEntry)
      .then((x) => {
        console.log(x);
        let newEntries = [...entries];
        newEntries.splice(0, 1, x);
        props.setEntries([...newEntries]);
        console.log('new entries', newEntries);
        props.history.push('/timeline');
      })
      .catch((err) => console.log('err', err));
  };

  return (
    <Wrapper>
      <DatePage />

      <EntryForm>
        <label htmlFor="rating">How was today? (-2/+2 scale)</label>
        <select
          name="rating"
          id="rating"
          value={rating}
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
          value={hours}
          onChange={onChange}
        />
        <label htmlFor="journal"> Tell me about today:</label>
        <textarea
          name="journal"
          id="journal"
          onChange={onChange}
          defaultValue={entry}
        ></textarea>

        <button onClick={props.edit ? handleEdit : handleSubmit}>
          {props.edit ? 'Edit' : 'Submit'}
        </button>
      </EntryForm>
    </Wrapper>
  );
};

NewEntry.defaultProps = {
  rating: 1,
  entries: [],
};
export default NewEntry;
