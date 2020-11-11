import DailySummary from '../DailySummary';
import Header from '../Header';
import { useEffect, useState } from 'react'
import ApiService from '../../services/bugbook-api-service';


const Timeline = () => {

const [entries, setEntries] = useState([])
const [isLoading, setIsLoading] = useState(false)


let userId=3 //hardcoded. need to change with auth

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
