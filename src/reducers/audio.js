import { SAVE_AUDIO } from 'constants/audio';

const initialState = {
    tracks: null,
    error: null
};

const actionHandlers = {
    [SAVE_AUDIO] (state, payload) {
        return {
            ...state,
            tracks: [ payload ].concat(state.tracks)
        };
    }
};

export default (state = initialState, { type, payload }) => {
    const actionHandler = actionHandlers[type];
    if (actionHandler) {
        return actionHandler(state, payload);
    }
    return state;
};