export const SYNC_ADDRESS_SAGA = 'sync_address_saga';
export const ADD_ADDRESS_SAGA = 'add_address_saga';
export const DELETE_ADDRESS_SAGA = 'delete_address_saga';

export const SYNC_ADDRESS = 'sync_address';


export const syncAddress = addresses => {
    return {
        type: SYNC_ADDRESS,
        addresses
    }
}

export const addAddressSaga = (address, selectedAddress=null) => {
    return {
        type: ADD_ADDRESS_SAGA,
        address,
        selectedAddress,
    }
};

export const syncAddressSaga = amount => {
    return {
        type: SYNC_ADDRESS_SAGA,
        amount,
    }
}

export const deleteAddressSaga = addressId => {
    return {
        type: DELETE_ADDRESS_SAGA,
        addressId
    }
}
