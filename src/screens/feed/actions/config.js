import { SERVER_URL } from 'src/appConstants';
import { deviceInfo, versionCode } from 'src/helpers';

export const getFeedDataConfig = (data, getState) => {
    return {
        method: 'post',
        url: `${SERVER_URL}Home/FeedArray`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            // userID: data?.userID,
            deviceInfo: deviceInfo,
            versionCode: versionCode,
        },
    };
};
