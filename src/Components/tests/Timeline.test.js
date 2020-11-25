import React from 'react';
import ReactDom from 'react-dom';
import Timeline from '../Timeline';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <Timeline entries={[]} />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
