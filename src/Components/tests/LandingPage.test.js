import React from 'react';
import ReactDom from 'react-dom';
import LandingPage from '../../Routes/LandingPage';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
