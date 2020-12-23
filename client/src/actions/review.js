import {
  ADD_GAME_REVIEW,
  SHOW_ALL_REVIEWS,
  SHOW_ALL_GAME_REVIEWS,
  SHOW_AVERAGE_RATING,
  GAME_REVIEW_DETAIL,
  EDIT_GAME_REVIEW,
  DELETE_GAME_REVIEW,
  TERMINATE_USER_REVIEW,
  GAME_REVIEW_ERROR,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

export const addGameReview = (review, gameId) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      `/api/game/review/${gameId}/add`,
      review,
      config
    );

    dispatch({
      type: ADD_GAME_REVIEW,
      payload: res.data,
    });

    dispatch(setAlert('Review added', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: GAME_REVIEW_ERROR,
      payload: errors,
    });
  }
};

export const showAllReviews = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/game/review/all');

    dispatch({
      type: SHOW_ALL_REVIEWS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const showAllGameReviews = (gameId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/game/review/${gameId}/all`);

    dispatch({
      type: SHOW_ALL_GAME_REVIEWS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const showAverageRating = (gameId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/game/review/${gameId}/average`);

    dispatch({
      type: SHOW_AVERAGE_RATING,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const showGameReviewDetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/game/review/reviewDetails/${id}`);

    dispatch({
      type: GAME_REVIEW_DETAIL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const editGameReview = (id, review) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(`/api/game/review/edit/${id}`, review, config);

    dispatch({
      type: EDIT_GAME_REVIEW,
      payload: res.data,
    });

    dispatch(setAlert('Review updated', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: GAME_REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteGameReview = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/game/review/delete/${id}`);

    dispatch({
      type: TERMINATE_USER_REVIEW,
      payload: id,
    });

    dispatch({
      type: DELETE_GAME_REVIEW,
      payload: id,
    });

    dispatch(setAlert('Review deleted', 'success'));
  } catch (err) {
    dispatch({
      type: GAME_REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
