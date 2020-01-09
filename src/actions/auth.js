import axios from 'helpers/axios';
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN, LOGOUT } from 'constants/auth';
import CookieHelper from 'helpers/CookieHelper';

export const resetErrors = () => async dispatch => {
    dispatch({ type: LOGIN });
};

export const login = (data, callback) => async dispatch => {
    const { login: username = '', password = '' } = data;
    try {
        const response = await axios.post('/users/login', {
            username,
            password
        });
        const { token } = response.data;
        dispatch({
            type: LOGIN_SUCCESS,
            payload: token
        });
        CookieHelper.setCookie('auth', token);
        if (callback) {
            callback();
        }
    } catch (e) {
        const { data } = e.response;
        dispatch({
            type: LOGIN_ERROR,
            payload: data.error
        });
    }
};

export const register = (data, callback) => async dispatch => {
    dispatch({ type: LOGIN });
    const { username = '', password = '' } = data;
    try {
        const response = await axios.post('/users', {
            username,
            password
        });
        const { token } = response.data;
        dispatch({
            type: LOGIN_SUCCESS,
            payload: token
        });
        CookieHelper.setCookie('auth', token);
        if (callback) {
            callback();
        }
    } catch (e) {
        const { data } = e.response;
        dispatch({
            type: LOGIN_ERROR,
            payload: data.error
        });
    }
};

export const logout = () => async dispatch => {
    CookieHelper.deleteCookie('auth');
    dispatch({ type: LOGOUT });
};