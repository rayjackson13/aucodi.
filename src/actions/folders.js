import axios from 'helpers/axios';
import {
    GET_FOLDERS,
    GET_FOLDERS_ERROR,
    GET_FOLDERS_SUCCESS
} from 'constants/folders';

export const getFolders = () => async dispatch => {
    dispatch({
        type: GET_FOLDERS
    });
    try {
        const response = await axios.get('/folders');
        dispatch({
            type: GET_FOLDERS_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        dispatch({
            type: GET_FOLDERS_ERROR,
            payload: e.response.data
        });
    }
};