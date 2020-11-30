import React from 'react';
import { Link } from 'react-router-dom';
import { isSameDay } from 'date-fns';

import TheDate from '../Date';
import { Content, Wrapper } from './HomePage.styles';

const Home = (props) => {
  const todayDate = Date.now();
  return (
    <Wrapper>
      <div></div>
      <Content>
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
        <Link to="/timeline">Timeline</Link>
        <Link to="/observations">Observations</Link>
        <Link to="/vizualize">Visualize</Link>
        <div></div>
      </Content>
      <div></div>
    </Wrapper>
  );
};

export default Home;
