import { takeEvery } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';

import * as actions from '../actions';
import rsf from './firebase';

function* syncAddressList() {
    const channel = yield call(rsf.database.channel, 'addresses');
    while(true) {
        const { value } = yield take(channel);
        yield put(actions.syncAddress(value));
    }
}

function* submitAddress({address, selectedAddress}) {
    if (selectedAddress) {
        //update
        yield call(rsf.database.update, `addresses/${selectedAddress}`, { address });
    }
    else {
        yield call(rsf.database.create, 'addresses', { address });
    }
}

function* deleteAddress({addressId}) {
    yield call(rsf.database.delete, `addresses/${addressId}`);

}

function* watchAddress() {
    yield takeEvery(actions.SYNC_ADDRESS_SAGA, syncAddressList);
    yield takeEvery(actions.ADD_ADDRESS_SAGA, submitAddress);
    yield takeEvery(actions.DELETE_ADDRESS_SAGA, deleteAddress);
}

export default function* rootSaga() {
    yield [ watchAddress() ]
}