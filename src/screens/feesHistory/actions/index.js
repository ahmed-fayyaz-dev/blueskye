import { Alert } from 'react-native';
import axios from 'axios';
import * as types from '../constants';
import { getFeesHistoryConfig } from './config';

//ACTIONS

export function GetFeesHistoryAction(data) {
    return async (dispatch, getState) => {
        try {
            return await axios(getFeesHistoryConfig(data, getState)).then(
                response => {
                    dispatch({
                        type: types.GET_FEES_HISTORY_SUCCESS,
                        payload: response?.data,
                    });

                    return response.data;
                },
            );
        } catch (error) {
            console.error('error///', error);
            Alert.alert(
                'Error! Get Fees History action was unsucessfull. ',
                `${error}\n`,
            );
            throw new Error(error);
        }
    };
}
