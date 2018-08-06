

import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESSFUL } from '../constants/index';
import axios from 'axios'

function* fetchUser(){
    const user = yield call(axios.get, 'http://jsonplaceholder.typicode.com/users')
    yield put({type: FETCH_USER_SUCCESSFUL, user: user})
}

function* watchFetchUser(){
    yield takeEvery(FETCH_USER_REQUEST, fetchUser)
}

export const userSagas = [
    watchFetchUser()
]