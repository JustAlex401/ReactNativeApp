import { takeEvery } from 'redux-saga/effects';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* incrementAsync() {
  yield delay(1000);
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

const sagaExample = function* () {
  yield takeEvery('EVENT', watchIncrementAsync);
}

export default sagaExample;