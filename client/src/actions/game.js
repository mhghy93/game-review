import {
  ADD_GAME,
  EDIT_GAME,
  SHOW_ALL_GAMES,
  SHOW_LATEST_GAMES,
  SHOW_ALL_GAME_CATEGORIES,
  SHOW_ALL_GAME_PLATFORMS,
  SEARCH_GAMES,
  SEARCH_GAMES_BY_CATEGORY,
  SEARCH_GAMES_BY_PLATFORM,
  SHOW_GAME_DETAIL,
  DELETE_GAME,
  GAME_ERROR,
  SHOW_GAMES,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

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

    dispatch(setAlert('Game added', 'success'));
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

    dispatch(setAlert('Game updated', 'success'));
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

export const showGames = (pageParam) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/game/${pageParam}`);

    dispatch({
      type: SHOW_GAMES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const showLatestGames = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/game/latest');

    dispatch({
      type: SHOW_LATEST_GAMES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const searchGames = (searchParam) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/game/search/${searchParam}`);

    dispatch({
      type: SEARCH_GAMES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const searchGamesByCategory = (searchParam) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/game/search/categories/${searchParam}`);

    dispatch({
      type: SEARCH_GAMES_BY_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const searchGamesByPlatform = (searchParam) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/game/search/platforms/${searchParam}`);

    dispatch({
      type: SEARCH_GAMES_BY_PLATFORM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const showAllGameCategories = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/game/categories/all');

    dispatch({
      type: SHOW_ALL_GAME_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const showAllGamePlatforms = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/game/platforms/all');

    dispatch({
      type: SHOW_ALL_GAME_PLATFORMS,
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
    await axios.delete(`/api/game/admin/delete/${id}`);

    dispatch({
      type: DELETE_GAME,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
