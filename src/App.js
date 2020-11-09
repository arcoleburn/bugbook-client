import React from 'react';
import Home from './Components/HomePage';
import NewEntry from './Components/NewEntryForm';
import Timeline from './Components/Timeline';

import DailySummaryExp from './Components/DailySummaryExpanded';
import Observations from './Components/Observations/ObservationsPage';
import ObservationsForm from './Components/Observations/ObservationsForm'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new-entry" component={NewEntry} />
      <Route exact path="/timeline" component={Timeline} />
      <Route exact path={`/mon`} component={DailySummaryExp} />
      <Route exact path = '/observations' component={Observations}/>
      <Route exact path ='/new-observation' component={ObservationsForm}/>
    </Switch>
  </Router>
);

export default App;
