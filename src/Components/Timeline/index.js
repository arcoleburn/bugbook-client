import DailySummary from '../DailySummary';
import Header from '../Header';
import { useEffect, useState } from 'react';
import ApiService from '../../services/bugbook-api-service';
import jwt from 'jsonwebtoken';
import TokenService from '../../services/token.service';
import userInfoService from '../../services/user-info-service';
import chunk from '../Utils/helpers';
import { ControlButtons, LabelBar, Wrapper } from './Timeline.styles';

const Timeline = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState(0);

  const { entries, setEntries } = props;
  // useEffect(()=>{
  //   let entries=props.entries
  //   console.log(entries)
  //   setIsLoading(true)
  //   console.log('get entries ran from timeline')
  //   ApiService.getEntries().then((resData)=>setEntries(resData))

  // setIsLoading(false)
  // return
  // }, [props.entries])
  console.log(entries);
  console.log(chunk(entries, 11));
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
  console.log('list', list);
  console.log('chunked list', chunk(list, 14));
  let chunkedList = chunk(list, 7);

  return (
    <Wrapper>
      <h2> Timeline</h2>{' '}
      <h3>
        {new Date(chunkedList[display][0].props.date).toDateString()}{' '}
        - {' '}
        {new Date(
          chunkedList[display][
            chunkedList[display].length - 1
          ].props.date
        ).toDateString()}{' '}
      </h3>
      <LabelBar>
      <div>Date:</div>
      <div>Hours:</div>
      <div>Rating:</div>
      </LabelBar>
      {isLoading ? 'loading...' : chunkedList[display]}
      {!isLoading ? (
        <ControlButtons>
          <div /> 
          <button onClick={() => setDisplay(display + 1)}
           disabled = {display=== chunkedList.length-1} >
            Next
          </button>
          <button onClick={() => setDisplay(display - 1)}
          disabled = {!display}>
            Prev
          </button>
          <button onClick={() => setDisplay(0)}> Reset</button>
        </ControlButtons>
      ) : null}
    </Wrapper>
  );
};
export default Timeline;
