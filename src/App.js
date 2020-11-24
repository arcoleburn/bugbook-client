import React, { useEffect, useState } from 'react';
import Home from './Components/HomePage';
import NewEntry from './Components/NewEntryForm';
import Timeline from './Components/Timeline';
import Vizualize from './Components/Vizualize';

import Observations from './Components/Observations/ObservationsPage';
import ObservationsForm from './Components/Observations/ObservationsForm';
import LoginPage from '../src/Routes/LoginPage';
import LandingPage from './Routes/LandingPage';
import Header from '../src/Components/Header';
import PrivateRoute from '../src/Components/Utils/PrivateRoute';
import PublicRoute from '../src/Components/Utils/PublicRoute';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import jwt from 'jsonwebtoken';
import TokenService from '../src/services/token.service';
import RegistrationPage from './Components/RegistrationPage';
import ApiService from './services/bugbook-api-service';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
  const [userId, setUserId] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [entries, setEntries] = useState([
    'This an an example entry',
  ]);

  useEffect(() => {
    if (!TokenService.getAuthToken()) return;
    if (TokenService.getAuthToken() && userId == null) {
      setUserId(jwt.decode(TokenService.getAuthToken()).userId);
      setFirstName(jwt.decode(TokenService.getAuthToken()).firstName);
    }
    ApiService.getEntries().then((resData) => {
      setEntries(
        resData.sort(
          (a, b) =>
            Date.parse(b.date_created) - Date.parse(a.date_created)
        )
      );
    });
  }, [userId]);

  return (
    <>
      <Router>
        <Header
          setUserId={setUserId}
          setFirstName={setFirstName}
          setEntries={setEntries}
        />
        <Switch>
          <PublicRoute
            exact
            path="/"
            component={(props) => (
              <LandingPage
                {...props}
                setUserId={setUserId}
                setFirstName={setFirstName}
              />
            )}
          />
          <PublicRoute
            exact
            path="/register"
            component={RegistrationPage}
          />
          <PublicRoute
            exact
            path="/login"
            component={(props) => (
              <>
                <LoginPage
                  {...props}
                  setUserId={setUserId}
                  setFirstName={setFirstName}
                />
              </>
            )}
          />
          <PrivateRoute
            exact
            path="/home"
            component={(props) => (
              <Home
                {...props}
                setUserId={setUserId}
                setFirstName={setFirstName}
              />
            )}
          />
          <PrivateRoute
            exact
            path="/new-entry"
            component={(props) => (
              <NewEntry
                {...props}
                entries={entries}
                setEntries={setEntries}
              />
            )}
          />
          <PrivateRoute
            exact
            path="/timeline"
            component={(props) => (
              <Timeline
                {...props}
                firstName={firstName}
                entries={entries}
                setEntries={setEntries}
              />
            )}
          />

          <PrivateRoute
            exact
            path="/observations"
            component={(props) => (
              <Observations {...props} firstName={firstName} />
            )}
          />
          <PrivateRoute
            exact
            path="/new-observation"
            component={(props) => (
              <ObservationsForm {...props} firstName={firstName} />
            )}
          />
          <PrivateRoute
            exact
            path="/vizualize"
            component={(props) => (
              <Vizualize {...props} entries={entries} id={userId}/>
            )}
          />
          <PrivateRoute
            exact
            path="/edit"
            component={(props) => (
              <NewEntry
                {...props}
                entries={entries}
                setEntries={setEntries}
                edit={true}
              />
            )}
          />
        </Switch>
        <GlobalStyle />
      </Router>
    </>
  );
};
export default App;
