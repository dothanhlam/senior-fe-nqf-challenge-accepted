export const SYNC_ADDRESS_SAGA = 'sync_address_saga';


export const SYNC_ADDRESS = 'sync_address';
export const UPDATE_ADDRESS = 'update_address';
export const DELETE_ADDRESS = 'delete_address';
export const ADD_ADDRESS = 'add_address';

export const syncAddress = addresses => {
    return {
        type: SYNC_ADDRESS,
        addresses
    }
}

export const addAddress = address => {
    return {
        type: ADD_ADDRESS,
        address,
    }
};

export const syncAddressSaga = amount => {
    return {
        type: SYNC_ADDRESS_SAGA,
        amount,
    }
}

export const updateAddress = address => {
    return {
        type: UPDATE_ADDRESS,
        address,
    }
}