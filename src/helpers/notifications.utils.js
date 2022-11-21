import * as Notifications from 'expo-notifications';
import { isAndroid, isDevice } from './index';

export async function requestNotificationsPermissionsAsync() {
    return await Notifications.requestPermissionsAsync({});
    // ios: {
    //     allowAlert: true,
    //     allowBadge: true,
    //     allowSound: true,
    //     allowAnnouncements: true,
    // },
}

export async function registerForPushNotificationsAsync() {
    let token;

    if (isAndroid) {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (isDevice) {
        const { status: existingStatus } =
            await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await requestNotificationsPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }

        token = (
            await Notifications.getExpoPushTokenAsync({
                experienceId: '@shirotp0ison/bluesky-student',
            })
        ).data;
        // console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    return token;
}

export const NotificationSettings = Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});
