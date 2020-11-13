import DailySummary from '../DailySummary';
import Header from '../Header';
import { useEffect, useState } from 'react'
import ApiService from '../../services/bugbook-api-service';
import jwt from 'jsonwebtoken'
import TokenService from '../../services/token.service'

const Timeline = (props) => {

const [entries, setEntries] = useState([])
const [isLoading, setIsLoading] = useState(false)

const payload = jwt.decode(TokenService.getAuthToken())
console.log('payload in obs', payload)

let userId = payload.userId
  useEffect(()=>{
    setIsLoading(true)
    ApiService.getEntries(userId).then((resData)=>setEntries(resData))
  setIsLoading(false)
  }, [])

  let list = entries.map((day) => {
    return (
      <DailySummary
        date={day.date_created}
        hours={day.deep_hours}
        rating={day.day_rating}
        entry={day.journal_entry}
        key={day.date_created}
      />
    );
  });
  return (
      <>
      <Header>
          Timeline
      </Header>
      {isLoading? 'loading...': list}
      </>)
};
export default Timeline;
