import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

import { icons } from 'assets/images';
import { IonIcons } from 'src/helpers';
import { CustomRoundButton } from 'src/components/buttons';
import { CustomSubheading, CustomTitle } from 'src/components/customText';
import { GapV } from 'src/components/gap';
import globalStyles, {
    bRl,
    bRss,
    mgM,
    mgMs,
    mgS,
    mgL,
    onBackgroundDark,
    iconSizeL,
    pdHs,
    bRxL,
    mgxL,
    pdH,
} from 'src/styles/index';

const MyProfile = () => {
    const { colors } = useTheme();
    const style = styles(colors);

    const name = 'User Profile';
    const AvatarIcon = () => (
        <View style={style.avatarContainer}>
            <IonIcons
                name={'person-outline'}
                size={iconSizeL}
                color={onBackgroundDark}
                style={style.avatarStyle}
            />
        </View>
    );

    const Content = () => (
        <View>
            <GapV small />
            <CustomTitle style={style.title}>{name}</CustomTitle>
        </View>
    );

    const Bottom = () => (
        <View>
            <GapV large />
            <CustomRoundButton title={`Edit Profile`} style={style.button} />
            <GapV small />
            <CustomRoundButton title={`About Us`} style={style.button} />
            <GapV small />
            <CustomRoundButton title={`Help Center`} style={style.button} />
        </View>
    );

    return (
        <View style={style.container}>
            {AvatarIcon()}
            {Content()}
            {Bottom()}
        </View>
    );
};
export default MyProfile;

const styles = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
        },

        card: {
            borderRadius: bRss,
            paddingTop: mgMs,
            paddingHorizontal: pdH,
            // borderWidth: StyleSheet.hairlineWidth,
        },

        content: {
            flexGrow: 1,
            paddingHorizontal: pdHs,
            paddingTop: mgM,
        },

        image: {
            alignSelf: 'center',
            height: 60,
            width: 60,
        },

        qr: {
            alignSelf: 'center',
            height: 200,
            width: 200,
        },

        fdr: { flexDirection: 'row' },

        divider: {
            alignSelf: 'center',
            backgroundColor: onBackgroundDark,
            height: 1,
            width: '80%',
        },

        subText: {
            color: '#999999',
            fontSize: 20,
        },

        title: {
            fontWeight: 'bold',
            fontSize: 24,
        },

        icon: { alignSelf: 'center' },

        avatarStyle: {},

        avatarContainer: {
            borderRadius: bRxL,
            backgroundColor: 'black',
            alignSelf: 'center',
            padding: mgL,
            marginTop: mgxL,
        },

        button: {
            width: '80%',
            alignSelf: 'center',
            backgroundColor: colors.secondary,
        },
    });
