import React from 'react';
import Date from '../Date'
import {Link} from 'react-router-dom'
import { Wrapper } from './HomePage.styles'
import Header from '../Header';
import RegistrationForm from '../RegistrationForm';

const Home = () => {
  return (
    <Wrapper>
      <Header/>
      <Date />
      <Link to='/new-entry'>Today's Entry</Link>
        <Link to ='/timeline'>Timeline</Link>
        <Link to ='/observations'>Observations</Link> 
        <Link to ='/'>Vizualize</Link>
   
    </Wrapper>
  );
};

export default Home