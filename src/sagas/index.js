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

function* watchAddress() {
    yield takeEvery(actions.SYNC_ADDRESS_SAGA, syncAddressList);
}

export default function* rootSaga() {
    yield [ watchAddress() ]
}