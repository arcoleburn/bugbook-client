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

  let userId = 1 //HARD CODED NEED TO CHANGE TO BE DYNAMIC 
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
      <h2> The bug {props.firstname || 'John'} :</h2>
      <ul>{list}</ul>
      <ObservationsForm onSubmit={handleObsAdded}/>
    </>
  );
};

export default Observations
