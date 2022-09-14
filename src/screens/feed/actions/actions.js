import { Alert } from 'react-native';
import axios from 'axios';
import { getFeedDataConfig } from './config';
import * as types from 'src/screens/feed/constants/constants';
import { feedData } from 'src/screens/feed/dummyData';

//ACTIONS

export function GetFeedDataAction(data) {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: types.GET_FEED_SUCCESS,
                payload: feedData,
            });

            return feedData;

            // return await axios(getFeedDataConfig(data, 'CM', getState)).then(
            //     response => {
            //         dispatch({
            //
            //         });
            //         return response.data;
            //     },
            // );
        } catch (error) {
            console.error('error///', error);
            Alert.alert(
                'Error! Get Feed action was unsucessfull. ',
                `${error}\n`,
            );
            throw new Error(error);
        }
    };
}
