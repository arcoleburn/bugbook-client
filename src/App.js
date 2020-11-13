import React, { useState } from 'react';
import Home from './Components/HomePage';
import NewEntry from './Components/NewEntryForm';
import Timeline from './Components/Timeline';

import DailySummaryExp from './Components/DailySummaryExpanded';
import Observations from './Components/Observations/ObservationsPage';
import ObservationsForm from './Components/Observations/ObservationsForm';
import LoginPage from '../src/Routes/LoginPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import jwt from 'jsonwebtoken'
import TokenService from '../src/services/token.service'
import DailySummary from './Components/DailySummary';

const App = () => {
  const [userId, setUserId] = useState(jwt.decode(TokenService.getAuthToken()).userId);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={(props) => (
            <LoginPage {...props} updateId={setUserId} />
          )}
        />
        <Route
          exact
          path="/new-entry"
          render={(props) => <NewEntry {...props} userId={userId} />}
        />
        <Route
          exact
          path="/timeline"
          render={(props) => <Timeline {...props} userId={userId} />}
        />
        <Route
          exact
          path={`/mon`}
          render={(props) => (
            <DailySummaryExp {...props} userId={userId} />
          )}
        />{' '}
        {/*not sure i need this route*/}
        <Route
          exact
          path="/observations"
          render={(props) => (
            <Observations {...props} userId={userId} />
          )}
        />
        <Route
          exact
          path="/new-observation"
          render={(props) => (
            <ObservationsForm {...props} userId={userId} />
          )}
        />
      </Switch>
    </Router>
  );
};
export default App;
