import { Alert } from 'react-native';
import axios from 'axios';
import * as types from '../constants';
import { getMessagesConfig } from './config';

//ACTIONS

export function GetMessagesAction(data) {
    return async (dispatch, getState) => {
        try {
            return await axios(getMessagesConfig(data, getState)).then(
                response => {
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
