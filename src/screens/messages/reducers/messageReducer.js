import * as types from 'src/screens/messages/constants/index';

let initial = {
    loading: false,
    data: {},
    error: null,
};
export default function (state = initial, action) {
    switch (action.type) {
        case types.FETCH_MESSAGE_SUCCESS:
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
