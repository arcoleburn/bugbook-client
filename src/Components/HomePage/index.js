import React from 'react';
import Date from '../Date'
import {Link} from 'react-router-dom'
import { Wrapper } from './HomePage.styles'
import Header from '../Header';
import RegistrationForm from '../RegistrationForm';

const Home = (props) => {
  console.log('home props', props)
  return (
    <Wrapper>
      {/* <Header setUserId = {props.setUserId} setFirstName={props.setFirstName} /> */}
      <Date />
      <Link to='/new-entry'>Today's Entry</Link>
        <Link to ='/timeline'>Timeline</Link>
        <Link to ='/observations'>Observations</Link> 
        <Link to ='/vizualize'>Vizualize</Link>
   
    </Wrapper>
  );
};

export default Home