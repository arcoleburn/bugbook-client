import React from 'react';
import ReactDom from 'react-dom';
import Charts from '../Vizualize/Charts'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
        <BrowserRouter>
            <Charts/>
        </BrowserRouter>
        , div);
        ReactDom.unmountComponentAtNode(div);
});