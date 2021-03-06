import {
  REGISTER_USER,
  REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOADED,
  EDIT_USER_PROFILE,
  DELETE_USER_PROFILE,
  USER_AUTH_ERROR,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isUserAuthenticated: false,
  user: {},
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isUserAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_USER:
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isUserAuthenticated: true,
        loading: false,
      };
    case EDIT_USER_PROFILE:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case DELETE_USER_PROFILE:
    case REGISTER_FAIL:
    case USER_LOGOUT:
    case USER_LOGIN_FAIL:
    case USER_AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isUserAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
