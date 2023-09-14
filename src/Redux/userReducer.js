export default (action, state = {}) => {
  switch (action?.type) {
    case 'LOGIN_USER':
      return { ...state, currentUser: action.payload };
    case 'NEW_USER':
      return state;
    case 'CLEAR_USER':
      return {};
    default:
      return state;
  }
};
