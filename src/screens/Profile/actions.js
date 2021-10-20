import { EDIT_PROFILE, SAVE_AVATAR } from './constants';

export function editProfile(payload) {
  return {
    type: EDIT_PROFILE,
    payload: payload
  };
};

export function saveAvatar(payload) {
  return {
    type: SAVE_AVATAR,
    payload: payload
  };
};