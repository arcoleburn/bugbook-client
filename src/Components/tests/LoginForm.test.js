import React from 'react';
import ReactDom from 'react-dom';
import LoginForm from '../LoginForm';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
