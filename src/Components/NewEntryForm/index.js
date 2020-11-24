//FIX THE DATES BS

import React, { useReducer, useState, useEffect } from 'react';
import Header from '../Header';
import DatePage from '../Date';
import { EntryForm, Wrapper } from './NewEntryForm.styles';
import ApiService from '../../services/bugbook-api-service';
import jwt from 'jsonwebtoken';
import TokenService from '../../services/token.service';
import userInfoService from '../../services/user-info-service';
import { compareAsc, isSameDay } from 'date-fns';

const initialFormState = {
  rating: 0,
  hours: 0,
  journal: '',
};
function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const todayDate = new Date();

const NewEntry = (props) => {
  const { entries } = props;

  const [today, setToday] = useState(false);
  //const [state, dispatch] = useReducer(reducer, initialFormState);

  const [rating, setRating] = useState(0);
  const [hours, setHours] = useState(0);
  const [entry, setEntry] = useState('');

  let currentEntry;
  if (entries.length > 0 && props.edit) {
    currentEntry = entries[0];
  }

  useEffect(() => {
    if (
      entries.length &&
      isSameDay(todayDate, new Date(entries[0].date_created))
    ) {

      setToday(true);
      props.history.push('/edit');
    } else {
      setToday(false);
    }
  }, []);

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
  if (props.edit) {
    handleEdit = (e) => {
      e.preventDefault();
      let newEntry = {
        day_rating: rating,
        deep_hours: hours,
        journal_entry: entry,
      };
      ApiService.editEntry(currentEntry.id, newEntry).then((x) => {
      
        let newEntries = [...entries];
        newEntries.splice(0, 1, x);
        props.setEntries(newEntries);
        props.history.push('/timeline');
      });
    };
  }

  if (props.entries.length > 0) {
    const now = new Date();
    const date = now.toDateString();
  }
  return (
    <Wrapper>
      <DatePage />
      {today && !props.edit ? (
        <p>
          {' '}
          youve already made an entry today, please go to the edit
          page on the timeline to edit
        </p>
      ) : (
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
      )}
    </Wrapper>
  );
};

NewEntry.defaultProps = {
  rating: 1,
  entries: []
};
export default NewEntry;
