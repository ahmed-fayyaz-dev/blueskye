import { Alert } from 'react-native';
import axios from 'axios';
import { signupConfig } from './config';
import * as types from 'src/screens/login/constants';

export function signupAction(data) {
    return async dispatch => {
        return await axios(signupConfig(data))
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
                Alert.alert('Error! Logging in was unsucessfull', `${error}`);
                dispatch({ type: types.LOGIN_ACCOUNT_FAIL, payload: error });
                throw new Error(error);
            });
    };
}
