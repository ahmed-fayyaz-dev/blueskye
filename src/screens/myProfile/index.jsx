import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import { IonIcons } from 'src/helpers';
import AppBar from 'src/components/appbar';
import { CustomRoundButton } from 'src/components/buttons';
import {
    CustomTitle,
    CustomText,
    CustomSubheading,
} from 'src/components/customText';
import { GapV } from 'src/components/gap';
import {
    mgS,
    mgL,
    mgM,
    mgMs,
    onBackgroundDark,
    iconSizeL,
    bRxL,
    bRl,
    mgxL,
    bRs,
    bR,
} from 'src/styles/index';

const MyProfile = ({ navigation }) => {
    const { colors } = useTheme();
    const style = styles(colors);

    const name = 'User Profile';
    const navigate = () => {
        navigation.navigate('editProfile');
    };

    const Content = () => (
        <View style={style.box}>
            <CustomTitle style={style.title}>{name}</CustomTitle>
            <CustomSubheading
                style={style.subHeading}>{`open`}</CustomSubheading>
            <GapV />

            <CustomTitle style={style.title}>{`Your Profile`}</CustomTitle>
            <GapV />

            <CustomText style={style.subHeading}>{`Email`}</CustomText>
            <CustomSubheading
                style={style.text}>{`abc@abc.com`}</CustomSubheading>

            <GapV />
            <CustomText style={style.subHeading}>{`Phone Number`}</CustomText>
            <CustomSubheading style={style.text}>{`123`}</CustomSubheading>

            <GapV />
            <CustomText style={style.subHeading}>{`Date of Birth`}</CustomText>
            <CustomSubheading style={style.text}>{`1/2/3`}</CustomSubheading>

            <GapV />
            <CustomText style={style.subHeading}>{`Job Title`}</CustomText>
            <CustomSubheading style={style.text}>{`dev`}</CustomSubheading>
        </View>
    );

    return (
        <View style={style.container}>
            {/* {TopView()} */}
            {/* <GapV large /> */}
            {Content()}
            {/* {Bottom()} */}
        </View>
    );
};
export default MyProfile;

const styles = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
        },

        box: {
            height: '15%',
            backgroundColor: colors.primary,
        },

        subText: {
            fontSize: 20,
            color: colors.primary,
        },

        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: mgS,
        },

        avatarStyle: {},

        text: {
            marginLeft: mgMs,
            alignSelf: 'flex-start',
        },
        avatarContainer: {
            padding: 30,
            bottom: '-50%',
            borderRadius: bRxL,
            alignSelf: 'center',
            backgroundColor: 'black',
        },

        subHeading: {
            fontSize: 17,
            marginLeft: mgMs,
            alignSelf: 'flex-start',
            // color: colors.secondary,
        },
        box: {
            alignSelf: 'flex-start',
            // borderWidth: 2,
        },
    });
