import React from 'react';
import TheDate from '../Date';
import { Link } from 'react-router-dom';
import { Content, Wrapper } from './HomePage.styles';
import Header from '../Header';
import RegistrationForm from '../RegistrationForm';
import { compareAsc, isSameDay } from 'date-fns';

const Home = (props) => {
  
  const todayDate = Date.now()
  return (
    <Wrapper>
      <div></div>
      <Content>
        {/* <Header setUserId = {props.setUserId} setFirstName={props.setFirstName}/> */}
        <TheDate />
        <Link
          to={
            props.entries.length &&
            isSameDay(
              todayDate,
              new Date(props.entries[0].date_created)
            )
              ? '/edit'
              : '/new-entry'
          }
        >
          Today's Entry
        </Link>
        {/* <Link to="/new-entry">Today's Entry</Link> */}
        <Link to="/timeline">Timeline</Link>
        <Link to="/observations">Observations</Link>
        <Link to="/vizualize">Vizualize</Link>
        <div></div>
      </Content>
      <div></div>
    </Wrapper>
  );
};

export default Home;
