import { combineReducers } from 'redux';
import userDetailsReducer from './Reducers/UserDetailsReducer.js';

const reducers = combineReducers({
  userDetails: userDetailsReducer,
});

export default reducers;
