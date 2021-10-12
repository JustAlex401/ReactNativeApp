const initialState = {
  user: {
    name: 'Alex'
  }
};

function userReducer(state = initialState, action) {
  return {...state};
}

export default userReducer;