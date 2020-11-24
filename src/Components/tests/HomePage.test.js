import React from 'react';
import ReactDom from 'react-dom';
import HomePage from '../HomePage'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
        , div);
        ReactDom.unmountComponentAtNode(div);
});