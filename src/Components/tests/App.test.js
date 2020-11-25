import React from 'react';
import ReactDom from 'react-dom';
import App from '../../../src/App';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
