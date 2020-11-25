import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
  ADMIN_LOADED,
  ADMIN_AUTH_ERROR,
  SHOW_ALL_USERS,
  SHOW_USERS_ERROR,
  DELETE_USER_REVIEW,
  DELETE_USER_ACCOUNT,
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

export const loadAdmin = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/admin');

    dispatch({
      type: ADMIN_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADMIN_AUTH_ERROR,
    });
  }
};

export const adminLogin = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/admin/login', body, config);

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadAdmin());
  } catch (err) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
    });
  }
};

export const adminLogout = () => (dispatch) => {
  dispatch({ type: ADMIN_LOGOUT });
};

export const showUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/admin/show/users');

    dispatch({
      type: SHOW_ALL_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SHOW_USERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
