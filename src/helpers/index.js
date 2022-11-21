import React from 'react';
import { View, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDrawerStatus } from '@react-navigation/drawer';
import { format, parseISO } from 'date-fns';
import * as Device from 'expo-device';
import { ID, PASSWORD, ONBOARD } from './constants';

export const windowWidth = Dimensions.get('window').width;

export const windowHeigth = Dimensions.get('window').height;

export const isAndroid = Platform.OS === 'android';

export const isIos = Platform.OS === 'ios';

export const isDevice = Device.isDevice;

export const success = 'success';

export const standardDateFormat = 'dd/MM/yyyy';

export const standardTimeFormat = 'hh:mm a';

export const dateToAvoid = '01/01/1900';

export const dateToAvoidRaw = '1899-12-31T19:00:00.000Z';

export const apiDateFormat = 'yyyy-MM-dd';

export const apiDateFormat2 = 'MM/dd/yyyy';

export const versionCode = '0.0.1';

export const startingIp = '192.168.1.1';

export const deviceInfo = {
    brand: Device.brand,
    manufacturer: Device.manufacturer,
    modelName: Device.modelName,
    modelIdIOS: Device.modelId,
    designNameAndroid: Device.designName,
    productNameAndroid: Device.productName,
    supportedCpuArchitectures: Device.supportedCpuArchitectures,
    osName: Device.osName,
    osVersion: Device.osVersion,
    osBuildId: Device.osBuildId,
    osInternalBuildId: Device.osInternalBuildId,
    osBuildFingerprintAndroid: Device.osBuildFingerprint,
    platformApiLevelAndroid: Device.platformApiLevel,
    deviceName: Device.deviceName,
};

// export const isDrawerOpen =(navigation)=> getDrawerStatusFromState(navigation.getState()) === 'open';
export function isDrawerOpen() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useDrawerStatus() === 'open';
}

export const setStorageItem = async (key, value) => {
    try {
        return await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error(e);
        return false;
    }
};

export const getStorageItem = async key => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error(e);
        return false;
    }
};

export const removeStorageItem = async key => {
    try {
        return await AsyncStorage.removeItem(key);
    } catch (e) {
        console.error(e);
        return false;
    }
};

export const BottomBarIcons = ({ name, size, color }) => (
    <View style={{}}>
        <Ionicons name={name} size={size} color={color} />
    </View>
);
export const IonIcons = ({ name, size, color, style }) => (
    <Ionicons name={name} size={size} color={color} style={style} />
);

export const validateEmail = email => {
    var re =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)/;
    return re.test(email);
};

export function validatePassword(val) {
    var re =
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-?;,./{}|":<>[\]\\' ~_]).{8,}/;
    return re.test(val);
}

export const signOutFunc = ({ logout, navigation }) => {
    removeStorageItem(ID);
    removeStorageItem(ONBOARD);
    removeStorageItem(PASSWORD);
    logout();
    navigation.reset({
        index: 0,
        routes: [{ name: 'authStack' }],
    });
};

export const convertDate = date => {
    const f = format(date, standardDateFormat);
    if (String(f) === dateToAvoid) return '-';
    return f;
};

export const convertToTime = date => {
    if (format(date, standardDateFormat) === dateToAvoid) return '-';

    const f = format(date, standardTimeFormat);
    return f;
};

export const parseDate = date => parseISO(date);
