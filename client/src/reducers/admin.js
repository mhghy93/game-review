import {
  ADMIN_LOGIN,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_AUTH_ERROR,
  SHOW_ALL_USERS,
  DELETE_USER_REVIEW,
  DELETE_USER_ACCOUNT,
} from '../actions/types';

const initialState = {
  users: [],
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADMIN_LOGIN:
      return state;
    default:
      return state;
  }
}
