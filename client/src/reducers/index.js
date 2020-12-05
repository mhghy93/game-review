import { combineReducers } from 'redux';
import game from './game';
import admin from './admin';
import auth from './auth';

export default combineReducers({
  game,
  admin,
  auth,
});
