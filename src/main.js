import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reduxApp from './reducers/';
import {hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router} from 'react-router';

import routes from './routes';

const initialState = {};

let store = createStore(
    reduxApp,
    initialState);


const createSelectLocationState = () => {
    let prevRoutingState, prevRoutingStateJS
    return state => {
        const routingState = state['routing']
        if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
            prevRoutingState = routingState
        }
        return prevRoutingState
    }
}

const history = syncHistoryWithStore(hashHistory, store, {
    selectLocationState: createSelectLocationState()
})

const createProvider = () => {
    return (
    <Provider store = {store} >
        <Router history = {history} >{routes}</Router>
    </Provider>
    );
};

render(createProvider(), document.getElementById('root'));