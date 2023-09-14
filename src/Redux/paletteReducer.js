export default (action, state = {}) => {
  switch (action?.type) {
    case 'GET_PALETTE':
      return { ...state, palette: action.payload };
    default:
      return state;
  }
};
