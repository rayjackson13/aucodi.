import axios from 'helpers/axios';
import { 
    GET_TRACKS, 
    GET_TRACKS_SUCCESS, 
    GET_TRACKS_ERROR 
} from 'constants/audio';

export const saveAudio = track => dispatch => {
    // dispatch({
    //     payload: track,
    //     type: SAVE_AUDIO
    // });
};

export const getTracks = (folderName = '') => async dispatch => {
    dispatch({
        type: GET_TRACKS
    });
    try {
        const response = await axios.get('/media');
        dispatch({
            type: GET_TRACKS_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        dispatch({
            type: GET_TRACKS_ERROR,
            payload: e.response.data
        });
    }
};

export const pushTrack = (file, folderName = 'Unsorted') => async dispatch => {
    dispatch({
        type: GET_TRACKS
    });
    const audio = file.audioBlob;
    try {
        const formData = new FormData();
        formData.append('files[file]', audio);
        const response = await axios.post('/media', formData);
        dispatch({
            type: GET_TRACKS_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        dispatch({
            type: GET_TRACKS_ERROR,
            payload: e.response.data
        });
    }
};