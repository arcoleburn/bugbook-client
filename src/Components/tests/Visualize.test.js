import React from 'react';
import ReactDom from 'react-dom';
import Visualize from '../Vizualize'
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
        <BrowserRouter>
            <Visualize/>
        </BrowserRouter>
        , div);
        ReactDom.unmountComponentAtNode(div);
});