import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { updateSearchLocation } from '../actions';

export const GOOGLE_MAP_API = 'AIzaSyA4fBnmmB9TUTf5CchFkzaeeqYC4YiL-D8';
//const export api = 'AIzaSyDFlmplHUtDEx5R0xsS34tWDJm5eIxg6fY';

function search(address) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_MAP_API}`)
}

export function* searchAddressSaga({query}) {
    const result = yield call(search, query);
    if (result.status === 200) {
        const { data } = result;
        const { results } = data;
        if (results.length) {
            const { geometry } = results[0];
            yield put(updateSearchLocation({searchLocation: geometry}));
        }
    }
}