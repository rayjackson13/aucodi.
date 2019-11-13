import { SAVE_AUDIO } from 'constants/audio';

const initialState = {
    tracks: []
};

const actionHandlers = {
    [SAVE_AUDIO] (state, payload) {
        return {
            ...state,
            tracks: state.tracks.concat(payload)
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