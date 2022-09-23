import { SERVER_URL } from 'src/appConstants';

export function forgetPasswordConfig(data) {
    const { email } = data;
    return {
        // dispatch({ type: types.LOGIN_ACCOUNT_ATTEMPT }); {
        method: 'post',
        url: `${SERVER_URL}Home/ContactUserForgetPassword?EMail=${email}`,
        headers: {
            'Content-Type': 'application/json',
        },
    };
}
