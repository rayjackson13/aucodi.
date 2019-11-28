import { SAVE_AUDIO } from 'constants/audio';

const initialState = {
    tracks: [
        {
            duration: 1.24,
            name: 'Fucking Recording 1',
            date: new Date()
        },
        {
            duration: 1.24,
            name: 'Fucking Recording 1',
            date: new Date()
        },
        {
            duration: 1.24,
            name: 'Fucking Recording 1',
            date: new Date()
        },
        {
            duration: 1.24,
            name: 'Fucking Recording 1',
            date: new Date()
        },
        {
            duration: 1.24,
            name: 'Fucking Recording 1',
            date: new Date()
        },
        {
            duration: 1.24,
            name: 'Fucking Recording 1',
            date: new Date()
        },
        {
            duration: 1.24,
            name: 'Fucking Recording 1',
            date: new Date()
        },
        {
            duration: 1.24,
            name: 'Fucking Recording 1',
            date: new Date()
        },
        {
            duration: 1.24,
            name: 'Fucking Recording 1',
            date: new Date()
        },
        {
            duration: 1.24,
            name: 'Fucking Recording 1',
            date: new Date()
        },
        {
            duration: 1.24,
            name: 'Fucking Recording 1',
            date: new Date()
        },
    ]
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