import thunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initState = {
  user: {},
  palette: { palette: [] },
  favorites: { favorites: [] },
};
const store = createStore(rootReducer, initState, composeEnhancer(applyMiddleware(thunk)));

export default store;
