import * as types from '../constants';

let initial = {
    loading: false,
    data: {},
    error: null,
};
export default function (state = initial, action) {
    switch (action.type) {
        case types.MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            };
        default:
            return state;
    }
}
