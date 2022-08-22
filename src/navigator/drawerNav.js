import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { format } from "date-fns";
import { useTheme } from "react-native-paper";
import { connect } from "react-redux";

import { icons } from "assets/images";
import { IonIcons } from "src/helpers";
import { CustomCaption } from "src/components/customText";
import DrawerContent from "src/components/drawer";
import { logout } from "src/redux/common/actions/actions";

import Feed from "src/screens/feed";
import { Playground } from "src/screens/playground";
import { drawerActiveTint, drawerIcon } from "src/styles/navCss";

const levels = {
    feedLevel: 0,
    accountsLevel: 1,
    inventoryLevel: 2,
};

const Drawer = createDrawerNavigator();

const DrawerIcons = ({ size, focused, icon }) => (
    <Image
        source={icon}
        style={[focused ? null : null, { height: size, width: size }]}
    />
);

const DrawerNav = (props) => {
    const { colors } = useTheme();
    const style = styles(colors);

    return (
        <Drawer.Navigator
            useLegacyImplementation
            screenOptions={{
                // swipeEnabled: false,
                drawerActiveBackgroundColor: colors.primary,
                drawerActiveTintColor: drawerActiveTint,
                headerTitleAlign: "center",
                headerStyle: style.headerStyle,
                headerTintColor: drawerActiveTint,
                drawerStyle: style.drawer,
                drawerItemStyle: style.drawerItem,
                drawerIcon: ({ color, size }) =>
                    IonIcons({ name: drawerIcon, size: size, color: color }),
            }}
            drawerContent={(dCprops) => (
                <DrawerContent
                    {...dCprops}
                    logout={props.logout}
                    loginUserReducer={props.loginUserReducer.data}
                    drawerItemStyle={style.drawerItem}
                />
            )}
        >
            <Drawer.Screen
                name="feed"
                component={Feed}
                options={{
                    level: levels.feedLevel,
                    title: "- Feed",
                    headerTitleContainerStyle: { height: 0, width: 0 },
                }}
            />
            <Drawer.Screen name="playground" component={Playground} />
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

const styles = (colors) =>
    StyleSheet.create({
        drawerItem: {},

        drawer: {
            width: 0.8 * Dimensions.get("window").width,
        },

        headerStyle: { backgroundColor: colors.notification },
    });
