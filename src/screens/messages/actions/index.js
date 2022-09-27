import { Alert } from 'react-native';
import axios from 'axios';
import * as types from '../constants';
import { getMessagesConfig } from './config';

//ACTIONS

export function GetMessagesAction(data) {
    return async (dispatch, getState) => {
        try {
            console.log(getMessagesConfig(data, getState), '// CONFIG');

            return await axios(getMessagesConfig(data, getState)).then(
                response => {
                    console.log(response.data, 'ACTION');

                    dispatch({
                        type: types.MESSAGES_SUCCESS,
                        payload: response?.data,
                    });

                    return response.data;
                },
            );
        } catch (error) {
            console.error('error///', error);
            Alert.alert(
                'Error! Get Messages History action was unsucessfull. ',
                `${error}\n`,
            );
            throw new Error(error);
        }
    };
}
