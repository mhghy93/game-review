import { SHOW_ALL_PROFILES, USER_REVIEWS, PROFILE_ERROR } from './types';
import axios from 'axios';
import { setAlert } from './alert';

export const showAllProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/user/profile/all');

    dispatch({
      type: SHOW_ALL_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

export const userReviews = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/user/profile/reviews');

    dispatch({
      type: USER_REVIEWS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
    });
  }
};
