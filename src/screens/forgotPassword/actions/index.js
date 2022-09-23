import { Alert } from 'react-native';
import axios from 'axios';
import { forgetPasswordConfig } from './config';

export function forgetPasswordAction(data) {
    return async () => {
        return await axios(forgetPasswordConfig(data))
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                console.error('error///', error); // Console Log
                Alert.alert(
                    'Sending recovery mail was unsucessfull',
                    `${error}`,
                );
                throw new Error(error);
            });
    };
}
