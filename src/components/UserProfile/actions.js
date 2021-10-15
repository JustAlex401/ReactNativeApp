import { LOGOUT_USER } from './constants';

export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
};