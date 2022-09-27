import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';
import { connect } from 'react-redux';

import { icons } from 'assets/images';
import MyProfileStack from './navSlices/myProfileStack';
import AppBar from 'src/components/appbar';
import DrawerContent from 'src/components/drawer';
import { logout } from 'src/redux/common/actions/actions';

import AttendanceHistory from 'src/screens/attendanceHistory';
import Feed from 'src/screens/feed';
import FeesHistory from 'src/screens/feesHistory';
// import { Playground } from 'src/screens/playground';
import ScanQR from 'src/screens/scanQr';
import { drawerActiveTint } from 'src/styles/navCss';

// const levels = {
//     subLevel1: 0,
//     subLevel2: 1,
// };

const Drawer = createDrawerNavigator();

const DrawerIcons = ({ size, focused, icon }) => (
    <Image
        source={icon}
        style={[focused ? null : null, { height: size, width: size }]}
    />
);

const AppBarHeader = ({ navigation, options }) => {
    const { title } = options;

    return <AppBar navigation={navigation} title={title} />;
};

const DrawerNav = props => {
    const { colors } = useTheme();
    const style = styles(colors);

    return (
        <Drawer.Navigator
            useLegacyImplementation
            screenOptions={{
                // swipeEnabled: false,
                drawerActiveBackgroundColor: colors.secondary,
                drawerActiveTintColor: drawerActiveTint,
                headerTitleAlign: 'center',
                headerStyle: style.headerStyle,
                // headerShown: false,
                header: AppBarHeader,
                headerTintColor: drawerActiveTint,
                drawerStyle: style.drawer,
                // drawerIcon: ({ color, size }) =>
                //     IonIcons({ name: drawerIcon, size: size, color: color }),
            }}
            drawerContent={dCprops => (
                <DrawerContent
                    {...dCprops}
                    logout={props.logout}
                    loginUserReducer={props.loginUserReducer.data}
                    drawerItemStyle={style.drawerItem}
                />
            )}>
            <Drawer.Screen
                name="feed"
                component={Feed}
                options={{
                    title: 'Posts',
                    drawerIcon: ({ focused, size }) =>
                        DrawerIcons({
                            focused,
                            size,
                            icon: icons.drawer.posts,
                        }),
                }}
            />
            <Drawer.Screen
                name="feesHistory"
                component={FeesHistory}
                options={{
                    title: 'Transaction History',
                    drawerIcon: ({ focused, size }) =>
                        DrawerIcons({
                            focused,
                            size,
                            icon: icons.drawer.fees,
                        }),
                }}
            />
            <Drawer.Screen
                name="scanQr"
                component={ScanQR}
                options={{
                    title: 'Scan QR',
                    drawerIcon: ({ focused, size }) =>
                        DrawerIcons({
                            focused,
                            size,
                            icon: icons.drawer.scanQr,
                        }),
                }}
            />

            <Drawer.Screen
                name="attendanceHistory"
                component={AttendanceHistory}
                options={{
                    title: 'Attendance History',
                    drawerIcon: ({ focused, size }) =>
                        DrawerIcons({
                            focused,
                            size,
                            icon: icons.drawer.scanQr,
                        }),
                }}
            />

            <Drawer.Screen
                name="myProfileStack"
                component={MyProfileStack}
                options={{
                    title: 'My Profile',
                    drawerIcon: ({ focused, size }) =>
                        DrawerIcons({
                            focused,
                            size,
                            icon: icons.drawer.myProfile,
                        }),
                }}
            />

            {/* <Drawer.Screen name="playground" component={Playground} /> */}
        </Drawer.Navigator>
    );
};

function mapStateToProps({ loginUserReducer }) {
    return {
        loginUserReducer,
    };
}

export default connect(mapStateToProps, {
    logout,
})(DrawerNav);

const styles = colors =>
    StyleSheet.create({
        drawer: {
            width: 0.8 * Dimensions.get('window').width,
        },

        headerStyle: { backgroundColor: colors.primary },
    });
