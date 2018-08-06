
import { delay } from 'redux-saga'
import { takeEvery, put, call } from 'redux-saga/effects';
import { INCREMENT, INCREMENT_ASYNC } from '../constants'

function* incrementAsync() {
    yield call(delay, 2000)
    yield put({ type: INCREMENT })
}

function* watchIncrementAsync(){
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

export const counterSagas = [
    watchIncrementAsync()
]