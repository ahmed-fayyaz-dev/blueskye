import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfile from 'src/screens/editProfile';
import MyProfile from 'src/screens/myProfile';
import DeleteAccount from 'src/screens/myProfile/components/deleteAccount';
// import WelcomeScreen from "src/screens/welcomeScreen";

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="myProfile"
                initialParams={{ title: 'My Profile' }}
                component={MyProfile}
                options={{ title: 'My Profile' }}
            />
            <Stack.Screen
                name="deleteAccount"
                initialParams={{ title: 'Delete Account' }}
                component={DeleteAccount}
                options={{ title: 'Delete Account', headerShown: false }}
            />
            {/* <Stack.Screen name="editProfile" component={EditProfile} /> */}
        </Stack.Navigator>
    );
};

export default MyProfileStack;
