import 'react-native-gesture-handler';
import 'expo-dev-client';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootSiblingParent } from 'react-native-root-siblings';
import {
    SafeAreaProvider,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';

import { settings } from 'src/settings';
import ErrorBoundary from 'src/components/errorBoundary';
import {
    NotificationSettings,
    registerForPushNotificationsAsync,
} from 'src/helpers/notifications.utils';
import AppNavigator from 'src/navigator/navigation';
import { store } from 'src/redux/store';

settings;
NotificationSettings;

export default function App() {
    const notificationListener = useRef();
    const responseListener = useRef();
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);

    useEffect(() => {
        registerForPushNotificationsAsync().then(token =>
            setExpoPushToken(token),
        );

        notificationListener.current =
            Notifications.addNotificationReceivedListener(notification => {
                setNotification(notification);
            });

        responseListener.current =
            Notifications.addNotificationResponseReceivedListener(response => {
                console.log(response);
            });

        return () => {
            Notifications.removeNotificationSubscription(
                notificationListener.current,
            );
            Notifications.removeNotificationSubscription(
                responseListener.current,
            );
        };
    }, []);

    return (
        <GestureHandlerRootView style={styles.container}>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <RootSiblingParent>
                    <ErrorBoundary>
                        <StoreProvider store={store}>
                            <AppNavigator />
                        </StoreProvider>
                    </ErrorBoundary>
                </RootSiblingParent>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}

// process.on("unhandledRejection",)

// export default Sentry.Native.wrap(App)     ;
const styles = StyleSheet.create({
    container: { flex: 1 },
});
