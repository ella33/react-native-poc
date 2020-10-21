import { combineReducers } from 'redux';
import userReducer from './userReducer';

/** Combining all reducers into one to form the global state of our app */
const globalReducer = combineReducers({
  user: userReducer,
});

export default globalReducer;
