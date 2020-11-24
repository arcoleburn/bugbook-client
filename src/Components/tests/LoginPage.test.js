import React from 'react';
import ReactDom from 'react-dom';
import LandingPage from '../../Routes/LoginPage'
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../../Routes/LoginPage';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
        <BrowserRouter>
            <LoginPage/>
        </BrowserRouter>
        , div);
        ReactDom.unmountComponentAtNode(div);
});