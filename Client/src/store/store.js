import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';

const initialState = {};
const middlewares = [thunk, logger];

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default store;
