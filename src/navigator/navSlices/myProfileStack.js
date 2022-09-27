import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
            <Stack.Screen
                name="myProfile"
                component={MyProfile}
                options={{ title: 'My Profile' }}
            />
            <Stack.Screen name="editProfile" component={EditProfile} />
        </Stack.Navigator>
    );
};

export default MyProfileStack;
