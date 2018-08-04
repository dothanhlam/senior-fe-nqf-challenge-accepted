import {SYNC_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS } from "../actions";

const appReducer = (state = {}, action) => {
    switch (action.type) {
        case SYNC_ADDRESS:
            return {
                ...state, ...action
            }

        case UPDATE_ADDRESS:
        case DELETE_ADDRESS:
        default:
            return state;

    }
}

export default appReducer;