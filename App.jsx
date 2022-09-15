import 'react-native-gesture-handler';
import 'expo-dev-client';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootSiblingParent } from 'react-native-root-siblings';
import {
    SafeAreaProvider,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';

import { settings } from 'src/settings';
import ErrorBoundary from 'src/components/errorBoundary';
import AppNavigator from 'src/navigator/navigation';
import { store } from 'src/redux/store';

settings;

export default function App() {
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

// export default Sentry.Native.wrap(App)     ;
const styles = StyleSheet.create({
    container: { flex: 1 },
});
