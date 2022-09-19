import * as Application from 'expo-application';
import * as Updates from 'expo-updates';
import Toast from 'react-native-root-toast';
import { ID, PASSWORD, ONBOARD } from './constants';
import { removeStorageItem, isAndroid, isIos } from './index';

const destroyAuth = async () => {
    await removeStorageItem(ID);
    await removeStorageItem(PASSWORD);
    await removeStorageItem(ONBOARD);
};

export const handleBackToSignIn = async () => {
    // remove user settings
    await destroyAuth();
    // restart app
    await Updates.reloadAsync();
};

export const getUniqueDeviceId = async () => {
    if (isAndroid) {
        return Application.androidId;
    } else if (isIos) {
        return await Application.getIosIdForVendorAsync();
    } else return "couldn't Identify Device";
};

export function showSnack(msg) {
    Toast.show(msg, Toast.durations.SHORT);
}
