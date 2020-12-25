import {
  ADD_GAME,
  SHOW_ALL_GAMES,
  SHOW_ALL_GAME_CATEGORIES,
  SHOW_ALL_GAME_PLATFORMS,
  SHOW_GAME_DETAIL,
  EDIT_GAME,
  DELETE_GAME,
  GAME_ERROR,
} from '../actions/types';

const initialState = {
  games: [],
  game: {},
  categories: [],
  platforms: [],
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_GAME:
      return {
        ...state,
        games: [payload, ...state.games],
        loading: true,
      };
    case SHOW_ALL_GAMES:
      return {
        ...state,
        games: payload,
      };
    case SHOW_ALL_GAME_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case SHOW_ALL_GAME_PLATFORMS:
      return {
        ...state,
        platforms: payload,
      };
    case SHOW_GAME_DETAIL:
      return {
        ...state,
        game: payload,
      };
    case EDIT_GAME:
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === payload.id ? payload : game
        ),
      };
    case DELETE_GAME:
      return {
        ...state,
        games: state.games.filter((game) => game.id !== payload),
      };
    case GAME_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
