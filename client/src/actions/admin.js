import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
  ADMIN_LOADED,
  ADMIN_AUTH_ERROR,
  SHOW_ALL_USERS,
  SHOW_USER_DETAIL,
  SHOW_USER_REVIEWS,
  SHOW_USERS_ERROR,
  DELETE_USER_REVIEW,
  DELETE_USER_ACCOUNT,
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

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
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

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

export const showUserDetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/admin/show/user/${id}`);

    dispatch({
      type: SHOW_USER_DETAIL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SHOW_USERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const showUserReviews = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/admin/show/user/${id}/reviews`);

    dispatch({
      type: SHOW_USER_REVIEWS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SHOW_USERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteUserReview = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/delete/review/${id}`);

    dispatch({
      type: DELETE_USER_REVIEW,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: SHOW_USERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/admin/delete/user/${id}`);

    dispatch({
      type: DELETE_USER_ACCOUNT,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: SHOW_USERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
