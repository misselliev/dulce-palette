export default (action, state = {}) => {
  switch (action?.type) {
    case 'LOAD_FAVORITES':
      return { ...state, favorites: action.payload };
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter(item => item !== action.payload) };
    default:
      return state;
  }
};
