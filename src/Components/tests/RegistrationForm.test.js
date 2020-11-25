import React from 'react';
import ReactDom from 'react-dom';
import RegistrationForm from '../RegistrationForm';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <RegistrationForm />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
