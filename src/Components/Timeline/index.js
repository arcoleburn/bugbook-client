import { useState } from 'react';
import { Link } from 'react-router-dom';
import { isSameDay } from 'date-fns';

import DailySummary from '../DailySummary';

import chunk from '../Utils/helpers';

import { ControlButtons, LabelBar, Wrapper } from './Timeline.styles';

const Timeline = (props) => {
  const todayDate = new Date();
  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState(0);

  const { entries, setEntries } = props;
  let list = entries
    .sort(
      (a, b) =>
        Date.parse(b.date_created) - Date.parse(a.date_created)
    )
    .map((day) => {
      return (
        <DailySummary
          entries={entries}
          setEntries={setEntries}
          date={new Date(day.date_created).toDateString()}
          hours={day.deep_hours}
          rating={day.day_rating}
          entry={day.journal_entry}
          key={day.id}
          id={day.id}
        />
      );
    });

  let chunkedList = chunk(list, 7);

  return (
    <Wrapper>
      <h2> {props.firstName}'s Timeline</h2>{' '}
      <h3>
        {entries.length > 0 &&
          new Date(chunkedList[display][0].props.date).toDateString()}
        {entries.length == 0
          ? 'You dont have any entries yet! Get started with todays entry.'
          : '-'}
        {entries.length > 0 &&
          new Date(
            chunkedList[display][
              chunkedList[display].length - 1
            ].props.date
          ).toDateString()}{' '}
      </h3>
      <Link
        to={
          entries.length &&
          isSameDay(todayDate, new Date(entries[0].date_created))
            ? '/edit'
            : '/new-entry'
        }
      >
        Today's Entry
      </Link>
      <LabelBar>
        <div>Date:</div>
        <div>Hours:</div>
        <div>Rating:</div>
      </LabelBar>
      {isLoading ? 'loading...' : chunkedList[display]}
      {!isLoading ? (
        <ControlButtons>
          <div />
          <button
            onClick={() => setDisplay(display + 1)}
            disabled={display === chunkedList.length - 1}
          >
            Next
          </button>
          <button
            onClick={() => setDisplay(display - 1)}
            disabled={!display}
          >
            Prev
          </button>
          <button onClick={() => setDisplay(0)}> Reset</button>
        </ControlButtons>
      ) : null}
    </Wrapper>
  );
};
export default Timeline;
