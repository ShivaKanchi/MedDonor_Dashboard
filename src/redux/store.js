import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './Reducers/rootReducer'
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middlewares)));
export default store;