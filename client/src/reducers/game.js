import {
  ADD_GAME,
  SHOW_ALL_GAMES,
  SHOW_GAME_DETAIL,
  EDIT_GAME,
  DELETE_GAME,
  GAME_ERROR,
} from '../actions/types';

const initialState = {
  games: [],
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_GAME:
      return state;
    case SHOW_ALL_GAMES:
      return state;
    case SHOW_GAME_DETAIL:
      return state;
    case EDIT_GAME:
      return state;
    case DELETE_GAME:
      return state;
    case GAME_ERROR:
      return state;
    default:
      return state;
  }
}
