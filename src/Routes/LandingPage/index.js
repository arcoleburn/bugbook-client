import React from 'react';
import jwt from 'jsonwebtoken';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMedal,
  faClock,
  faMicroscope,
} from '@fortawesome/free-solid-svg-icons';

import {
  HowItWorks,
  IconSet,
  ItemSet,
  IconTripTyc,
  Wrapper,
} from './LandingPage.styles';

import graph from '../../images/dailyrating.png';
import observations from '../../images/observations.png';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token.service';
const LandingPage = (props) => {
  const handleLoginSuccess = () => {
    const { location, history } = props;
    const destination = (location.state || {}).from || '/home';

    props.setUserId(jwt.decode(TokenService.getAuthToken()).userId);
    props.setFirstName(
      jwt.decode(TokenService.getAuthToken()).firstName
    );

    history.push(destination);
  };

  const handleDemoClick = (e) => {
    e.preventDefault();

    AuthApiService.postLogin({
      username: 'johnnyUser',
      password: 'johnnyuser12345',
    })
      .then((res) => {
        if (!res.status == 200) {
          return res.json().then((err) => Promise.reject(err));
        }
        TokenService.saveAuthToken(res.authToken);
        handleLoginSuccess();
      })
      .catch((res) => {});
  };

  return (
    <Wrapper>
      <h2>
        TIME TO STUDY THE BUG CALLED <span>"YOU!"</span>
      </h2>
      <p>
        BugBook helps you get to know yourself better through
        consistent, methodical journaling and simple visualizations.
        Driven by a spirit of objective, scientific thinking, BugBook
        helps you learn things about yourself without judgement.
      </p>
      <button onClick={handleDemoClick}> EXPLORE BUGBOOK </button>
      <IconTripTyc>
        <IconSet>
          <p>Rate your Days</p>
          <FontAwesomeIcon icon={faMedal} size="8x" />
        </IconSet>
        <IconSet>
          <p>Track your Time</p>
          <FontAwesomeIcon icon={faClock} size="8x" />
        </IconSet>
        <IconSet>
          <p>Observe Trends</p>
          <FontAwesomeIcon icon={faMicroscope} size="8x" />
        </IconSet>
      </IconTripTyc>

      <HowItWorks>
        <h3>How It Works</h3>
        <p>Bugbook uses a simple 3 step journaling system.</p>
        <ItemSet>
          <h4>Step 1: Daily Rating</h4>
          <p>
            Give each day a score from -2 to 2. A -2 is an awful day.
            A 2 is a fantastic day!
          </p>
        </ItemSet>
        <ItemSet>
          <h4>Step 2: Creative Hours</h4>
          <p>
            Creativity is key. How much time are you dedicating to the
            things you want to focus on?
          </p>
        </ItemSet>
        <ItemSet>
          <h4>Step 3: Free Journal</h4>
          <p>
            Put whatever you want here, but a simple accounting of the
            events of the day works best!
          </p>
        </ItemSet>
        <p>
          Once you've been journaling consistently for a little while,
          BugBook's additional tools kick in.
        </p>
        <ItemSet>
          <div>
            <h4>Visualize:</h4>
            <p>
              BugBook's visualization tool can show you word clouds of
              your journal entries from postive days, as well as
              graphs to help bring out trends in your daily score.
              What do your best days have in common?
            </p>
          </div>
          <img src={graph} alt="example of daily rating graph" />
        </ItemSet>
        <ItemSet>
          <div>
            <h4>Observations</h4>

            <p>
              Observations: Develop a consistent journaling practice,
              and you're bound to notice things on your own.
              Observations is a place to log those things. Think of
              yourself as a scientist studying a brand new species of
              bug. Your job is to objectively observe and learn as
              much as you can about that bug...the bug called YOU!
            </p>
          </div>
          <img
            src={observations}
            alt="example of observations page"
          />
        </ItemSet>
      </HowItWorks>
      <button onClick={handleDemoClick}> BugBook Demo</button>
    </Wrapper>
  );
};

export default LandingPage;
