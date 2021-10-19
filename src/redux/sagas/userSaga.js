import AsyncStorage from '@react-native-community/async-storage';
import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGOUT_USER, LOGOUT_USER_FAILURE, LOGOUT_USER_SUCCESS } from '../../components/UserProfile/constants';
import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from '../../screens/LogIn/constants';
import { EDIT_PROFILE, EDIT_PROFILE_FAILURE, EDIT_PROFILE_SUCCESS } from '../../screens/Profile/constants';
import validateLogin from '../../utils/validateLogin'

export function* logInUser(action) {
  try{
    const token = Math.random().toString(36).substr(2);
    yield call(AsyncStorage.setItem, 'id_token', token);
    validateLogin(action.payload);
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: {
        email: action.payload.email,
        token: token,
        name: 'Alex'
      },
    });
  } catch (error) {
    yield put({ type: LOGIN_USER_FAILURE, payload: error.message });
  }
};

export function* logOutUser(action) {
  try{
    yield call(AsyncStorage.removeItem, 'id_token');
    yield put({
      type: LOGOUT_USER_SUCCESS
    });
  } catch (error) {
    yield put({ type: LOGOUT_USER_FAILURE, payload: error.message });
  }
};

export function* editProfile(action) {
  try{
    yield put({
      type: EDIT_PROFILE_SUCCESS,
      payload: {
        ...action.payload
      }
    });
  } catch (error) {
    yield put({ type: EDIT_PROFILE_FAILURE, payload: error.message });
  }
};

const userSaga = function* () {
  yield takeEvery(LOGIN_USER, logInUser);
  yield takeEvery(LOGOUT_USER, logOutUser);
  yield takeEvery(EDIT_PROFILE, editProfile);
};

export default userSaga;