import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import ApiService from '../../../services/bugbook-api-service';
import TokenService from '../../../services/token.service';
import Header from '../../Header';
import ObservationsForm from '../ObservationsForm'
import jwt from 'jsonwebtoken'
import userInfoService from '../../../services/user-info-service';
import { Wrapper } from './Observations.styles';


const Observations = (props) => {
 

  const payload = jwt.decode(TokenService.getAuthToken())


  let userId = userInfoService.getUserInfo().userId
 const firstName =userInfoService.getUserInfo().firstName
  const [obs, setObs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

 
  useEffect(()=>{
    setIsLoading(true)
    ApiService.getObservations(userId).then((resData)=>setObs(resData))
    setIsLoading(false)
  },[userId])
  
 const handleObsAdded = (input) =>{
   let newObs = {
     observation: input
   }
   //needs to make a post call and then refetch
    ApiService.postObservation(newObs)
    setObs([...obs, newObs])
   
  }
const handleDel =(id)=>{
  console.log('del')
  ApiService.delObs(id)
  let indexDel = obs.find(o=>o.id ==id)
  setObs(obs.filter(o=>o !== indexDel))
}
  const list = obs.map((o) =><li key={o.id}>{o.observation} <button key={o.id+1} onClick={()=> handleDel(o.id)}> Delete </button></li>);
  
  return (
    <Wrapper>
      <h2> The bug {props.firstName || 'John'} :</h2>
      <ul>{list}</ul>
      <ObservationsForm firstName={props.firstName} onSubmit={handleObsAdded}/>
    </Wrapper>
  );
};

export default Observations
