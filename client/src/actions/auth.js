import {
  REGISTER_USER,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOADED,
  USER_AUTH_ERROR,
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
