import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import MainContainer from './containers/main-container';

const addPropsToRoute = (WrappedComponent, passedProps) => {
    return (
        class Route extends Component {
            render(){
                let props = Object.assign({}, this.props, passedProps)
                return  <WrappedComponent {...props} />
            }
        }
    )
}

const renderRouteWithProps = props => {
    return ( <Route path = "/" component = {addPropsToRoute(App, props)}>
        <IndexRoute component = {MainContainer} />
    </Route>)
}

export default renderRouteWithProps;
