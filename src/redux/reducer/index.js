import LoginReducer from './LoginReducer';
import { productReducer } from './productReducer';
import { combineReducers } from 'redux';

// root reducer

export default combineReducers({
  Login: LoginReducer,
  Product: productReducer,
});
