import {Link} from 'react-router-dom'
import Header from '../../Header';
import ObservationsForm from '../ObservationsForm'
const Observations = (props) => {
  const observations = [
    'likes to create things',
    'has trouble giving up control',
    'is irritable without coffee',
    'gets distracted by his phone', 
  ];
  
  const list = observations.map((obs) => <li>{obs}</li>);
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
