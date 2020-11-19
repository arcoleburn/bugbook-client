
import { Link } from 'react-router-dom';
import ApiService from '../../services/bugbook-api-service';
import { Wrapper } from './DailySummaryExp.styles';

const DailySummaryExp = (props) => {
  
 const handleDel =()=> {
  ApiService.delEntry(props.id)
  let toDel = props.entries.find(x=>x.id == props.id)
 props.setEntries(props.entries.filter(x=>x !==toDel ))
  }

  return (
    <Wrapper>
      {/* <p>Journal Entry:</p> */}
      {props.entry}
      {props.date == new Date().toDateString() ? <Link to='/edit'><button> Edit Entry</button> </Link> : null} 
      <button onClick = {handleDel}> X </button>
    </Wrapper>
  );
};

export default DailySummaryExp;
