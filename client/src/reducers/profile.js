import {
  SHOW_ALL_PROFILES,
  USER_REVIEWS,
  PROFILE_ERROR,
} from '../actions/types';

const initialState = {
  profiles: [],
  profile: {},
  reviews: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_ALL_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case USER_REVIEWS:
      return {
        ...state,
        reviews: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
