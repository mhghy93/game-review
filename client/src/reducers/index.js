import { combineReducers } from 'redux';
import game from './game';
import admin from './admin';

export default combineReducers({
  game,
  admin,
});
