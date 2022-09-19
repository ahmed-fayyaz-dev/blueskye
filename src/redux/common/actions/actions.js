import * as types from 'src/redux/common/constants/constants';

export function logout() {
    return async dispatch => {
        dispatch({ type: types.RESET_ACTION });
    };
}

export function setLanguage(value) {
    return async dispatch => {
        dispatch({ type: types.LANGUAGE, payload: value });
    };
}
