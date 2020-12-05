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

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/user/profile');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_AUTH_ERROR,
    });
  }
};

export const userLogin = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/user/login', body, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
    });
  }
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};
