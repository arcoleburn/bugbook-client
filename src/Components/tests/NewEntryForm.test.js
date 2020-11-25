import React from 'react';
import ReactDom from 'react-dom';
import NewEntryForm from '../NewEntryForm';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <NewEntryForm />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
