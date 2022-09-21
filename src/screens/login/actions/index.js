import { Alert } from 'react-native';
import axios from 'axios';
import { SERVER_URL } from 'src/appConstants';
import { deviceInfo, versionCode } from 'src/helpers';
import { handleBackToSignIn } from 'src/helpers/utils';
import * as types from 'src/screens/login/constants';

export function loginAction(data) {
    return async dispatch => {
        dispatch({ type: types.LOGIN_ACCOUNT_ATTEMPT });

        var config = {
            method: 'post',
            url: `${SERVER_URL}Home/LoginContactUser`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                email: data.email,
                password: data.password,
                deviceInfo: deviceInfo,
                versionCode: versionCode,
            },
        };

        return await axios(config)
            .then(response => {
                dispatch({
                    type: types.LOGIN_ACCOUNT_SUCCESS,
                    payload: response.data,
                });
                // console.log(response.data);
                return response.data;
            })
            .catch(error => {
                console.error('error///', error); // Console Log
                Alert.alert(
                    'Error! Logging in was unsucessfull! removing cache ...',
                    `${error}`,
                );
                handleBackToSignIn();
                dispatch({ type: types.LOGIN_ACCOUNT_FAIL, payload: error });
                throw new Error(error);
            });
    };
}
