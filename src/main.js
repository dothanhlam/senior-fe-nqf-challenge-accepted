import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import renderRouteWithProps from './routes';
import AppStore from './store';

const store = new AppStore();

const createProvider = store => {
    return (
        <Router history={hashHistory}>{renderRouteWithProps({store})}</Router>
    );
};

render(createProvider(store), document.getElementById('root'));