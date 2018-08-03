import { combineReducers } from 'redux';
import routerReducer from './router-reducer';

const reduxApp = combineReducers({
    routing: routerReducer
})

export default reduxApp