import {
  ADD_GAME,
  SHOW_ALL_GAMES,
  EDIT_GAME,
  DELETE_GAME,
} from '../actions/types';

const initialState = {
  games: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_GAME:
      return state;
    case SHOW_ALL_GAMES:
      return state;
    case EDIT_GAME:
      return state;
    case DELETE_GAME:
      return state;
    default:
      return state;
  }
}
