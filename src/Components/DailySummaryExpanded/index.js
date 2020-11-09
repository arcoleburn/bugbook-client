
import { Wrapper } from './DailySummaryExp.styles';

const DailySummaryExp = (props) => {
  return (
    <Wrapper>
      <p>Journal Entry:</p>
      {props.entry}
    </Wrapper>
  );
};

export default DailySummaryExp;
