import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const middleware = [ thunk ];
const logger = createLogger();

const Store = createStore(
    reducer,
    applyMiddleware(...middleware, logger)
)

export default Store;