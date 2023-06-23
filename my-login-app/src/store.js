// // src/store.js
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import authReducer from './reducers/authReducer';

const loggerMiddleware = createLogger();
const middleware = [loggerMiddleware];

const store = createStore(authReducer, applyMiddleware(...middleware));

export default store;
