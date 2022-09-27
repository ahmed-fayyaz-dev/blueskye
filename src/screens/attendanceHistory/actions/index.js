import { Alert } from 'react-native';
import axios from 'axios';
import * as types from '../constants';
import { getAttendanceHistoryConfig } from './config';

//ACTIONS

export function GetAttendanceHistoryAction(data) {
    return async (dispatch, getState) => {
        try {
            return await axios(getAttendanceHistoryConfig(data, getState)).then(
                response => {
                    dispatch({
                        type: types.ATTENDANCE_HISTORY_SUCCESS,
                        payload: response?.data,
                    });

                    return response.data;
                },
            );
        } catch (error) {
            console.error('error///', error);
            Alert.alert(
                'Error! Get Attendance History action was unsucessfull. ',
                `${error}\n`,
            );
            throw new Error(error);
        }
    };
}
