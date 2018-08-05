import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { updateSearchLocation } from '../actions';

import { google_map_api } from "../config";
export const GOOGLE_MAP_API = google_map_api;

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