import { SERVER_URL } from 'src/appConstants';
import { deviceInfo, versionCode } from 'src/helpers';

export const otpVerifyConfig = (data, getState) => {
    const VID = getState().loginUserReducer.data?.crmStudentUser?.vid;
    const email = getState().loginUserReducer.data?.crmStudentUser?.email;
    const otp = data.otp;

    return {
        method: 'post',
        url: `${SERVER_URL}Home/VerifyContactUser?VID=${VID}&EMail=${email}&OTP=${otp}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            deviceInfo: deviceInfo,
            versionCode: versionCode,
        },
    };
};

export const otpResendConfig = (data, getState) => {
    const VID = getState().loginUserReducer.data?.crmStudentUser?.vid;
    const email = getState().loginUserReducer.data?.crmStudentUser?.email;

    return {
        method: 'post',
        url: `${SERVER_URL}Home/ResendContactUser?VID=${VID}&EMail=${email}`,
        headers: {
            'Content-Type': 'application/json',
        },
        // data: {
        //     deviceInfo: deviceInfo,
        //     versionCode: versionCode,
        // },
    };
};
