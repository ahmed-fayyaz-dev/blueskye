import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-root-toast';
import { RESTART_ERROR_ID, SUCCESS, ERROR } from './constants';
import { handleBackToSignIn } from './utils';
export async function callApi({
    data,
    setLoading,
    submitCallApi,
    successFunc,
    catchFunc,
    errFunc,
}) {
    NetInfo.fetch().then(async state => {
        if (state.isConnected != false) {
            setLoading(true);

            setTimeout(async () => {
                await submitCallApi(data)
                    .then(res => {
                        // console.log(res);
                        if (res?.status === SUCCESS) {
                            successFunc(res);
                        } else if (res?.status === ERROR) {
                            // console.log(res);
                            errFunc(res);
                            Toast.show(
                                `${res?.message}`,
                                Toast.durations.SHORT,
                            );

                            if (res?.errorid === RESTART_ERROR_ID) {
                                setTimeout(() => {
                                    handleBackToSignIn();
                                }, 2000);
                            }
                        } else {
                            // console.log('callAPI-Else', res);
                            errFunc(res);
                        }
                        setLoading(false);
                    })
                    .catch(e => {
                        setLoading(false);
                        console.error('apiCall', e);
                        catchFunc(e);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }, 0);
        } else {
            Toast.show('No internet Connectivity !', Toast.durations.SHORT);
            setLoading(false);
        }
    });
}
