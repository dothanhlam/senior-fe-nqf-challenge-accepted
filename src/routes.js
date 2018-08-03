import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MainContainer from './containers/main-container';

export default (
    <Route path = "/" component = {App}>
        <IndexRoute component = {MainContainer} />
    </Route>
)
