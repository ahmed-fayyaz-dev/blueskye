import { Alert } from 'react-native';
import axios from 'axios';
import { otpVerifyConfig, otpResendConfig } from './config';

export function verifyOtpAction(data) {
    return async (dispatch, getState) => {
        return await axios(otpVerifyConfig(data, getState))
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                console.error('error///', error); // Console Log
                Alert.alert('Verifying OTP was unsucessfull', `${error}`);
                throw new Error(error);
            });
    };
}

export function resendOtpAction(data) {
    return async (dispatch, getState) => {
        return await axios(otpResendConfig(data, getState))
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                console.error('error///', error); // Console Log
                Alert.alert('Resending OTP was unsucessfull', `${error}`);
                throw new Error(error);
            });
    };
}
