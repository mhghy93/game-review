import { combineReducers } from 'redux';
import game from './game';
import admin from './admin';
import auth from './auth';
import alert from './alert';
import review from './review';

export default combineReducers({
  game,
  admin,
  auth,
  alert,
  review,
});
