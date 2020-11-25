import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../../Routes/LoginPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
