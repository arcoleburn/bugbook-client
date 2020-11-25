import React from 'react';
import ReactDom from 'react-dom';
import DailySummaryExpanded from '../DailySummaryExpanded';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <DailySummaryExpanded />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});
