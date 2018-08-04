import { combineReducers } from 'redux';
import routerReducer from './router-reducer';
import appReducer from './app-reducer';

const reduxApp = combineReducers({
    appReducer,
    routing: routerReducer,
})

// selections
export const getAddresses = state =>  state.appReducer.addresses;
export const getCurrentLocation = state => state.appReducer.location;
export const getSearchLocation = state => state.appReducer.searchLocation;

export default reduxApp