import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk from 'redux-thunk';
import reducers from '../reducers/index';

const middleware = [thunk];

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;