import { LOGOUT_USER } from "../../components/UserProfile/constants";
import { LOGIN_USER } from "../../screens/LogIn/constants";

const initialState = {
  data: {},
  loading: false,
  error: null
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        data: {
          emai: action.payload.email,
          token: action.payload.password
        },
        loading: false,
        error: null
      }
    case LOGOUT_USER:
      return {
        data: {},
        loading: true,
        error: null
      }
    default :
      return state;
  }
}

export default userReducer;