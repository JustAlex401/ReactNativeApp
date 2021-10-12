import { all } from 'redux-saga/effects';
import sagaExample from './sagaExample';

const Sagas = function*(){
  yield all([
    sagaExample()
  ]);
}

export default Sagas;
