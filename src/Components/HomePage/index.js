import React from 'react';
import Date from '../Date'
import {Link} from 'react-router-dom'
import { Content, Wrapper } from './HomePage.styles'
import Header from '../Header';
import RegistrationForm from '../RegistrationForm';

const Home = (props) => {
  return (
    <Wrapper>
      <div></div>
      <Content>
        
      {/* <Header setUserId = {props.setUserId} setFirstName={props.setFirstName}/> */}
      <Date />
      <Link to='/new-entry'>Today's Entry</Link>
        <Link to ='/timeline'>Timeline</Link>
        <Link to ='/observations'>Observations</Link> 
        <Link to ='/vizualize'>Vizualize</Link>
        <div></div>
        </Content>
        <div></div>
    </Wrapper>
  );
};

export default Home