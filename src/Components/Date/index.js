import { Wrapper } from './Date.styles';

const Today = () => {
  const now = new Date();

  return (
    <Wrapper>
      <div></div>
      {now.toDateString()}
      <div></div>
    </Wrapper>
  );
};
export default Today;
