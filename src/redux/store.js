import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


let middleWares = [logger,thunk];
export const store = createStore(rootReducer, applyMiddleware(...middleWares));


export default store;