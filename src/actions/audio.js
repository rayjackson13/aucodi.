import { SAVE_AUDIO } from 'constants/audio';

export const saveAudio = track => dispatch => {
    dispatch({
        payload: track,
        type: SAVE_AUDIO
    });
};