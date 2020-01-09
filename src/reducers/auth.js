import { 
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from 'constants/auth';
import CookieHelper from 'helpers/CookieHelper';

const initialState = {
    token: CookieHelper.getCookie('auth'),
    error: null,
};

const actionHandlers = {
    [LOGIN] (state) {
        return {
            ...state,
            error: null
        };
    },
    [LOGIN_SUCCESS] (state, payload) {
        return {
            ...state,
            error: null,
            token: payload
        };
    },
    [LOGIN_ERROR] (state, error) {
        return {
            ...state,
            error
        };
    },
    [LOGOUT] () {
        return {
            token: undefined,
            error: null
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