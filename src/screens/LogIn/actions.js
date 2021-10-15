import { LOGIN_USER } from './constants';

export function loginUser(payload) {
  return {
    type: LOGIN_USER,
    payload: payload
  };
};