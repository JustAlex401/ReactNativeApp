import { all } from 'redux-saga/effects';
import userSaga from './userSaga';

const Sagas = function*(){
  yield all([
    userSaga()
  ]);
}

export default Sagas;
