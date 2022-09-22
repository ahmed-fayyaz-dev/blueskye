import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import { IonIcons } from 'src/helpers';
import AppBar from 'src/components/appbar';
import { CustomRoundButton } from 'src/components/buttons';
import { CustomTitle } from 'src/components/customText';
import { GapV } from 'src/components/gap';
import globalStyles, {
    mgL,
    onBackgroundDark,
    iconSizeL,
    bRxL,
    mgxL,
} from 'src/styles/index';

const MyProfile = ({ navigation }) => {
    const title = 'My Profile';
    const { colors } = useTheme();
    const style = styles(colors);

    const name = 'User Profile';
    const navigate = () => {
        navigation.navigate('editProfile');
    };
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
        <>
            <GapV small />
            <CustomTitle style={style.title}>{name}</CustomTitle>
        </>
    );

    const Bottom = () => (
        <>
            <GapV large />
            <CustomRoundButton
                title={`Edit Profile`}
                style={style.button}
                onPress={navigate}
            />
            <GapV small />
            <CustomRoundButton title={`About Us`} style={style.button} />
            <GapV small />
            <CustomRoundButton title={`Help Center`} style={style.button} />
        </>
    );

    return (
        <View style={style.container}>
            <AppBar navigation={navigation} title={title} />
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

        subText: {
            color: colors.primary,
            fontSize: 20,
        },

        title: {
            fontWeight: 'bold',
            fontSize: 24,
        },

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
