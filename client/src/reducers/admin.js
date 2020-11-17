import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOADED,
  ADMIN_AUTH_ERROR,
  SHOW_ALL_USERS,
  DELETE_USER_REVIEW,
  DELETE_USER_ACCOUNT,
} from '../actions/types';

const initialState = {
  users: [],
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  adminUser: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        adminUser: payload,
      };
    case ADMIN_LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case ADMIN_LOGIN_FAIL:
    case ADMIN_AUTH_ERROR:
    case DELETE_USER_ACCOUNT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
