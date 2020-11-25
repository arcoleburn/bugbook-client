import React from 'react';
import ReactDom from 'react-dom';
import ObservationsPage from '../Observations/ObservationsForm';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <ObservationsPage />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
