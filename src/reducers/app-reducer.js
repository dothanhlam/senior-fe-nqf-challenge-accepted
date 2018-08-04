import {SYNC_ADDRESS, UPDATE_LOCATION, UPDATE_SEARCH_LOCATION } from "../actions";

const appReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_LOCATION:
        case UPDATE_LOCATION:
        case SYNC_ADDRESS:
            return {
                ...state, ...action
            }
        default:
            return state;
    }
}

export default appReducer;