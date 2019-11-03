import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import content from './content';

export const store = createStore(
    combineReducers({
        content
    }),
    composeWithDevTools(applyMiddleware(thunk))
);