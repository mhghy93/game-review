import {
  ADD_GAME_REVIEW,
  SHOW_ALL_GAME_REVIEWS,
  SHOW_AVERAGE_RATING,
  EDIT_GAME_REVIEW,
  DELETE_GAME_REVIEW,
  GAME_REVIEW_ERROR,
} from '../actions/types';

const initialState = {
  reviews: [],
  review: {},
  averageRating: {},
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_GAME_REVIEW:
      return {
        ...state,
        reviews: [payload, ...state.reviews],
        loading: true,
      };
    case SHOW_ALL_GAME_REVIEWS:
      return {
        ...state,
        reviews: payload,
      };
    case SHOW_AVERAGE_RATING:
      return {
        ...state,
        averageRating: payload,
      };
    case EDIT_GAME_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review.id === payload.id ? payload : review
        ),
      };
    case DELETE_GAME_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== payload),
      };
    case GAME_REVIEW_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
