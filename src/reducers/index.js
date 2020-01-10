import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import auth from './auth';
import content from './content';
import audio from './audio';
import folders from './folders';

export const store = createStore(
    combineReducers({
        auth,
        content,
        audio,
        folders
    }),
    composeWithDevTools(applyMiddleware(thunk))
);