import {
  ADD_GAME,
  SHOW_ALL_GAMES,
  SHOW_GAMES,
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
  totalItems: '',
  totalPages: '',
  currentPage: '',
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
    case SHOW_GAMES:
    case SEARCH_GAMES_BY_CATEGORY:
    case SEARCH_GAMES:
    case SEARCH_GAMES_BY_PLATFORM:
      return {
        ...state,
        games: payload.items,
        totalItems: payload.totalItems,
        totalPages: payload.totalPages,
        currentPage: payload.currentPage,
        loading: false,
      };
    case SHOW_ALL_GAMES:
      return {
        ...state,
        games: payload,
        loading: false,
      };
    case SHOW_ALL_GAME_CATEGORIES:
      return {
        ...state,
        categories: payload,
        loading: false,
      };
    case SHOW_ALL_GAME_PLATFORMS:
      return {
        ...state,
        platforms: payload,
        loading: false,
      };
    case SHOW_GAME_DETAIL:
      return {
        ...state,
        game: payload,
        loading: false,
      };
    case EDIT_GAME:
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === payload.id ? payload : game
        ),
        loading: false,
      };
    case DELETE_GAME:
      return {
        ...state,
        games: state.games.filter((game) => game.id !== payload),
        loading: false,
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
