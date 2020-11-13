import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import ApiService from '../../../services/bugbook-api-service';
import TokenService from '../../../services/token.service';
import Header from '../../Header';
import ObservationsForm from '../ObservationsForm'
import jwt from 'jsonwebtoken'

const Observations = (props) => {
  console.log('obs props', props)
  const observations = [
    'likes to create things',
    'has trouble giving up control',
    'is irritable without coffee',
    'gets distracted by his phone', 
  ];

  const payload = jwt.decode(TokenService.getAuthToken())
  console.log('payload in obs', payload)

  let userId = payload.userId//HARD CODED NEED TO CHANGE TO BE DYNAMIC 
 const firstName =payload.firstName
  const [obs, setObs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

 
  useEffect(()=>{
    setIsLoading(true)
    ApiService.getObservations(userId).then((resData)=>setObs(resData))
    setIsLoading(false)
  },[userId])
  
 const handleObsAdded = (input) =>{
   console.log('handleobs added ran')
   let newObs = {
     observation: input
   }
   console.log('new obs', newObs)
   //needs to make a post call and then refetch
    ApiService.postObservation(userId, newObs)
    setObs([...obs, newObs])
    console.log('obs', obs)
  }

console.log('obs', obs)
  const list = obs.map((o) => <li key={o.id}>{o.observation}</li>);
  return (
    <>
    <Header/>
      <h2> The bug {firstName || 'John'} :</h2>
      <ul>{list}</ul>
      <ObservationsForm firstName={firstName} onSubmit={handleObsAdded}/>
    </>
  );
};

export default Observations
