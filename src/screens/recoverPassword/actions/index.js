import { Alert } from 'react-native';
import axios from 'axios';
import { recoverPasswordConfig } from './config';

export function recoverPasswordAction(data) {
    return async () => {
        console.log(recoverPasswordConfig(data));

        return await axios(recoverPasswordConfig(data))
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                console.error('error///', error); // Console Log
                Alert.alert(
                    'Error! Recovering Password in was unsucessfull',
                    `${error}`,
                );
                throw new Error(error);
            });
    };
}
