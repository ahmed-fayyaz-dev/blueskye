import { SERVER_URL } from 'src/appConstants';
import { APPLICATION_TYPE } from 'src/helpers/constants';

export function scanQrConfig(data, getState) {
    const vId = getState().loginUserReducer.data?.crmStudentUser?.vid;
    const { data: hashData } = data;

    return {
        // dispatch({ type: types.LOGIN_ACCOUNT_ATTEMPT }); {
        method: 'post',
        url: `${SERVER_URL}Home/ContactUserAttendance`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            vid: vId,
            appliationType: APPLICATION_TYPE,
            qrCode: hashData,
            message: '',
            status: '',
        },
    };
}
