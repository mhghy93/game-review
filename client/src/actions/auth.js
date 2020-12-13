import {
  REGISTER_USER,
  REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOADED,
  USER_AUTH_ERROR,
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

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

export const userRegister = ({
  firstname,
  lastname,
  username,
  email,
  password,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    firstname,
    lastname,
    username,
    email,
    password,
  });

  try {
    const res = await axios.post('/api/user/register', body, config);

    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });

    dispatch(setAlert('Successfully registered ,you can login now', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
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
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: USER_LOGIN_FAIL,
    });
  }
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  dispatch(setAlert('Successfully Logged Out', 'success'));
};
