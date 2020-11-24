import React from 'react';
import ReactDom from 'react-dom';
import DailySummary from '../DailySummary'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
        <BrowserRouter>
            <DailySummary />
        </BrowserRouter>
        , div);
        ReactDom.unmountComponentAtNode(div);
});