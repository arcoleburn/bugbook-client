import { Content, Wrapper } from './DailySummary.styles';
import { Link } from 'react-router-dom';
import DailySummaryExp from '../DailySummaryExpanded'
import {useState} from 'react'


const DailySummary = (props) => {
  
    const [expanded, setExpand] = useState(false)
    
    const expandEntry = () =>{
        setExpand(!expanded)
    }

  return (
      <Wrapper onClick={expandEntry}>
          <Content>
        <div>{props.date}</div>
        <div>Hours: {props.hours}</div>
        <div>Rating: {props.rating}</div>
        </Content>
        {expanded? <DailySummaryExp entry={props.entry}/> : null}
      </Wrapper>
   
  );
};

export default DailySummary;
