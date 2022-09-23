import { Alert } from 'react-native';
import axios from 'axios';
import { scanQrConfig } from './config';

export function scanQrAction(data) {
    return async (dispatch, getState) => {
        return await axios(scanQrConfig(data, getState))
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('error///', error); // Console Log
                Alert.alert('Scan Qr was unsucessfull', `${error}`);
                throw new Error(error);
            });
    };
}
