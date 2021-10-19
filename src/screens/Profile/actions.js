import { EDIT_PROFILE } from './constants';

export function editProfile(payload) {
  return {
    type: EDIT_PROFILE,
    payload: payload
  };
};