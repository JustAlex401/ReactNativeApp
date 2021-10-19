import { LOGOUT_USER, LOGOUT_USER_FAILURE, LOGOUT_USER_SUCCESS } from "../../components/UserProfile/constants";
import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from "../../screens/LogIn/constants";
import { EDIT_PROFILE, EDIT_PROFILE_SUCCESS, SAVE_AVATAR, SAVE_AVATAR_FAILURE, SAVE_AVATAR_SUCCESS } from "../../screens/Profile/constants";

const initialState = {
  data: {},
  loading: false,
  error: null
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER: 
      return {
        ...state,
        loading: true,
        error: null
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        data: {
         ...action.payload
        },
        loading: false,
        error: null
      }
    case LOGIN_USER_FAILURE: 
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case LOGOUT_USER:
      return {
        ...state,
        loading: true,
        error: null
      }
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        data: {},
        loading: false,
        error: null
      }
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case EDIT_PROFILE:
      return {
        ...state,
        loading: true,
        error: null
      }
    case EDIT_PROFILE_SUCCESS:
      return { 
        ...state,
        data: {
          ...state.data,
          ...action.payload
        },
        loading: false,
        error: null
      }
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case SAVE_AVATAR:
      return {
        ...state,
        loading: true,
        error: null
      }
    case SAVE_AVATAR_SUCCESS:
      return { 
        ...state,
        data: {
          ...state.data,
          avatar: action.payload.avatar
        },
        loading: false,
        error: null
      }
    case SAVE_AVATAR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default :
      return state;
  };
};

export default userReducer;