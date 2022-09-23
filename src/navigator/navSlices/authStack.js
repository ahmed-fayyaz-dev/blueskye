import React, { useEffect, useState, useRef } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getStorageItem } from 'src/helpers';
import { NOT_FIRST_TIME } from 'src/helpers/constants';
import ForgotPassword from 'src/screens/forgotPassword';
import Login from 'src/screens/login';
import OTPSend from 'src/screens/otpSend';
import OTPVerify from 'src/screens/otpVerify';
import RecoverPassword from 'src/screens/recoverPassword';
import Signup from 'src/screens/signup';
// import WelcomeScreen from "src/screens/welcomeScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    // props
    const [ready, setready] = useState(false);
    const notFirstTime = useRef(false);

    useEffect(() => {
        async function effect() {
            notFirstTime.current = await getStorageItem(NOT_FIRST_TIME);
            setready(true);
        }
        effect();
    }, []);

    if (!ready) return null;
    return (
        <Stack.Navigator
            // initialRouteName={notFirstTime.current ? "login" : "welcome"}
            initialRouteName="login"
            screenOptions={{
                headerShown: false,
                headerTintColor: 'red',
                headerMode: 'float',
            }}>
            {/* <Stack.Screen name="welcome" component={WelcomeScreen} /> */}
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="forgotPassword" component={ForgotPassword} />
            <Stack.Screen name="recoverPassword" component={RecoverPassword} />
            <Stack.Screen name="signup" component={Signup} />
            <Stack.Screen name="otpSend" component={OTPSend} />
            <Stack.Screen name="otpVerify" component={OTPVerify} />
        </Stack.Navigator>
    );
};

export default AuthStack;
