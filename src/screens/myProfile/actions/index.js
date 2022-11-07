import { Alert } from 'react-native';
import axios from 'axios';
import { deleteAccountConfig } from './config';

export function deleteAccountAction(data) {
    return async (dispatch, getState) => {
        return await axios(deleteAccountConfig(data, getState))
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error('error///', error); // Console Log

                Alert.alert(
                    'Deleting account was unsucessfull. Contact our support for your query.',
                    `${error?.message}`,
                );
                throw new Error(error);
            });
    };
}
