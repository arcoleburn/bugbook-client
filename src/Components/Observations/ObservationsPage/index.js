import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import ApiService from '../../../services/bugbook-api-service';
import Header from '../../Header';
import ObservationsForm from '../ObservationsForm'

const Observations = (props) => {
  const observations = [
    'likes to create things',
    'has trouble giving up control',
    'is irritable without coffee',
    'gets distracted by his phone', 
  ];

  let userId = 4 //HARD CODED NEED TO CHANGE TO BE DYNAMIC 
  const [obs, setObs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  console.log(ApiService)
  useEffect(()=>{
    setIsLoading(true)
    ApiService.getObservations(userId).then((resData)=>setObs(resData))
    setIsLoading(false)
  },[userId])
  
console.log('obs', obs)
  const list = obs.map((o) => <li>{o.observation}</li>);
  return (
    <>
    <Header/>
      <h2> The bug {props.firstname || 'John'} :</h2>
      <ul>{list}</ul>
      <ObservationsForm/>
    </>
  );
};

export default Observations
