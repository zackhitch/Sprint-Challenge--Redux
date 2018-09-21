import { combineReducers } from 'redux';
import { smurfsReducer } from './smurfsReducer';

const rootReducer = combineReducers({
  smurfsReducer,
});

export default rootReducer;
