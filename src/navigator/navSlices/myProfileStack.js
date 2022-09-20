import React, { useEffect, useState, useRef } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getStorageItem } from 'src/helpers';
import { NOT_FIRST_TIME } from 'src/helpers/constants';
import EditProfile from 'src/screens/editProfile';
import MyProfile from 'src/screens/myProfile';
// import WelcomeScreen from "src/screens/welcomeScreen";

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="myProfile"
            screenOptions={{
                headerShown: false,
                headerTintColor: 'red',
                headerMode: 'float',
            }}>
            <Stack.Screen name="myProfile" component={MyProfile} />
            <Stack.Screen name="editProfile" component={EditProfile} />
        </Stack.Navigator>
    );
};

export default MyProfileStack;
