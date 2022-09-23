import { SERVER_URL } from 'src/appConstants';
import { deviceInfo, versionCode } from 'src/helpers';

export const recoverPasswordConfig = data => {
    return {
        method: 'post',
        url: `${SERVER_URL}Home/SaveContactUser`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            email: data.email,
            password: data.password,
            vName: data.vName,
            phone: data.phone,
            confirmPassword: data.confirmPassword,
            vid: data.vid,

            accessCode: data.accessCode,
            deviceInfo: deviceInfo,
            versionCode: versionCode,
            //dummy
            insertedBy: 0,
            insertedIp: 'string',
            updatedBy: 0,
            updatedIp: 'string',
            message: 'string',
        },
    };
};
