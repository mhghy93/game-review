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
} from '../actions/types';

const initialState = {
  users: [],
  user: {},
  reviews: [],
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  adminUser: {},
  error: {},
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
    case ADMIN_LOGOUT:
    case ADMIN_LOGIN_FAIL:
    case ADMIN_AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case SHOW_ALL_USERS:
      return {
        ...state,
        users: payload,
      };
    case SHOW_USER_DETAIL:
      return {
        ...state,
        user: payload,
      };
    case SHOW_USER_REVIEWS:
      return {
        ...state,
        reviews: payload,
      };
    case SHOW_USERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case DELETE_USER_ACCOUNT:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };
    default:
      return state;
  }
}
