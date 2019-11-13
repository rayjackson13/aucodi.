import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import content from './content';
import audio from './audio';

export const store = createStore(
    combineReducers({
        content,
        audio
    }),
    composeWithDevTools(applyMiddleware(thunk))
);