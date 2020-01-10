import {
    GET_FOLDERS,
    GET_FOLDERS_ERROR,
    GET_FOLDERS_SUCCESS
} from 'constants/folders';

const initialState = {
    data: null,
    error: null
};

const actionHandlers = {
    [GET_FOLDERS] (state) {
        return {
            ...state,
            error: null
        };
    },
    [GET_FOLDERS_SUCCESS] (state, payload) {
        return {
            ...state,
            data: payload
        };
    },
    [GET_FOLDERS_ERROR] (state, payload) {
        return {
            ...state,
            error: payload
        };
    },
};

export default (state = initialState, { type, payload }) => {
    const actionHandler = actionHandlers[type];
    if (actionHandler) {
        return actionHandler(state, payload);
    }
    return state;
};