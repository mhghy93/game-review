import {
  ADD_GAME,
  SHOW_ALL_GAMES,
  SHOW_LATEST_GAMES,
  SHOW_ALL_GAME_CATEGORIES,
  SHOW_ALL_GAME_PLATFORMS,
  SEARCH_GAMES,
  SEARCH_GAMES_BY_CATEGORY,
  SEARCH_GAMES_BY_PLATFORM,
  SHOW_GAME_DETAIL,
  EDIT_GAME,
  DELETE_GAME,
  GAME_ERROR,
} from '../actions/types';

const initialState = {
  games: [],
  latestGames: [],
  game: {},
  categories: [],
  platforms: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_GAME:
      return {
        ...state,
        games: [payload, ...state.games],
        loading: false,
      };
    case SHOW_LATEST_GAMES:
      return {
        ...state,
        latestGames: payload,
        loading: false,
      };
    case SHOW_ALL_GAMES:
    case SEARCH_GAMES:
    case SEARCH_GAMES_BY_CATEGORY:
    case SEARCH_GAMES_BY_PLATFORM:
      return {
        ...state,
        games: payload,
        loading: false,
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
