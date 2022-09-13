import { SERVER_URL } from 'src/appConstants';
import { deviceInfo, versionCode } from 'src/helpers';

export const signupConfig = data => {
    return {
        method: 'post',
        url: `${SERVER_URL}Home/SaveContactUser`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            email: data.email,
            password: data.password,
            vName: data.name,
            phone: data.phone,
            confirmPassword: data.confirmPassword,

            deviceInfo: deviceInfo,
            versionCode: versionCode,
            //dummy
            vid: 0,
            insertedBy: 0,
            insertedIp: 'string',
            updatedBy: 0,
            updatedIp: 'string',
            message: 'string',
        },
    };
};
