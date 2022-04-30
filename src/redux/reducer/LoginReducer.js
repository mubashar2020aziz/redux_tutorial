/* eslint-disable default-case */
import { LOGIN_REQUEST } from './../action/Types';

//   initalstate

const initialState = {
  isLoggedIn: false,
  user: {
    email: '',
    password: '',
  },
};

//  login Reducer

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default LoginReducer;
