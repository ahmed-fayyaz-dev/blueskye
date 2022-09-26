import { SERVER_URL } from 'src/appConstants';
import { deviceInfo, versionCode } from 'src/helpers';

export const getFeesHistoryConfig = (data, getState) => {
    const vId = getState().loginUserReducer.data?.crmStudentUser?.vid;

    return {
        method: 'post',
        url: `${SERVER_URL}Home/ContactUserLedger?${vId}`,
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
