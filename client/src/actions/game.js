import {
  ADD_GAME,
  EDIT_GAME,
  SHOW_ALL_GAMES,
  SHOW_GAME_DETAIL,
  DELETE_GAME,
  GAME_ERROR,
} from './types';
import axios from 'axios';

export const addGame = (game) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/game/admin/add', game, config);

    dispatch({
      type: ADD_GAME,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const editGame = (id, game) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(`/api/game/admin/edit/${id}`, game, config);

    dispatch({
      type: EDIT_GAME,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const showAllGames = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/game/all');

    dispatch({
      type: SHOW_ALL_GAMES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const showGameDetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/game/${id}`);

    dispatch({
      type: SHOW_GAME_DETAIL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteGame = (id) => async (dispatch) => {
  try {
  } catch (err) {}
};
