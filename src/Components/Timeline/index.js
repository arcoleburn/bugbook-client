import DailySummary from '../DailySummary';
import Header from '../Header';
import { useEffect, useState } from 'react'
import ApiService from '../../services/bugbook-api-service';
import jwt from 'jsonwebtoken'
import TokenService from '../../services/token.service'
import userInfoService from '../../services/user-info-service';

const Timeline = (props) => {

const [isLoading, setIsLoading] = useState(false)


  useEffect(()=>{
    setIsLoading(true)
    ApiService.getEntries().then((resData)=>props.setEntries(resData))
  setIsLoading(false)
  })
  
  let list = props.entries.sort((a,b)=>Date.parse(b.date_created)-Date.parse(a.date_created)).map((day) => {
    return (
      <DailySummary
        date={new Date(day.date_created).toDateString()}
        hours={day.deep_hours}
        rating={day.day_rating}
        entry={day.journal_entry}
        key={day.date_created}
      />
    );
  });
  return (
      <><h2> Timeline</h2>
      {isLoading? 'loading...': list}
      </>)
};
export default Timeline;
