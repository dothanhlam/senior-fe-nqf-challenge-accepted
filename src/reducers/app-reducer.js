import {SYNC_ADDRESS } from "../actions";

const appReducer = (state = {}, action) => {
    switch (action.type) {
        case SYNC_ADDRESS:
            return {
                ...state, ...action
            }
        default:
            return state;
    }
}

export default appReducer;