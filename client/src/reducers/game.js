const initialState = {
  games: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_GAME':
      return state;

    default:
      return state;
  }
}
