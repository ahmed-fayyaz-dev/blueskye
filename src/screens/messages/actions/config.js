import { SERVER_URL } from 'src/appConstants';
import { deviceInfo, versionCode } from 'src/helpers';
// import { loginUserReducer } from '../../login/reducers/loginUserReducer';

export const getMessagesConfig = (data, getState) => {
    const vId = getState().loginUserReducer.data?.crmStudentUser?.vid;

    console.log('VID is : ', vId);
    return {
        method: 'post',
        url: `${SERVER_URL}Home/ContactUserMessages?VID=${vId}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            deviceInfo: deviceInfo,
            versionCode: versionCode,
        },
    };
};
