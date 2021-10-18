import { LOGOUT_USER, LOGOUT_USER_FAILURE, LOGOUT_USER_SUCCESS } from "../../components/UserProfile/constants";
import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from "../../screens/LogIn/constants";

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
    default :
      return state;
  };
};

export default userReducer;