import { combineReducers } from 'redux';
import routerReducer from './router-reducer';
import appReducer from './app-reducer';

const reduxApp = combineReducers({
    appReducer,
    routing: routerReducer,
})

// selections
export const getAddresses = state =>  state.appReducer.addresses;

export default reduxApp