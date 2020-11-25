import React from 'react';
import ReactDom from 'react-dom';
import RegistrationPage from '../RegistrationPage';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <RegistrationPage />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
