import React from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { useTheme, Divider } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { icons } from 'assets/images';
import { Form } from './components/form';
import { CustomSubheading, CustomTitle } from 'src/components/customText';
import { GapV } from 'src/components/gap';
import { entering, exiting } from 'src/helpers/animation';
import { callApi } from 'src/helpers/apiCall';
import { ONBOARD, ID, PASSWORD } from 'src/helpers/constants';
import globalStyles, {
    bRl,
    bRss,
    mgM,
    mgMs,
    mgS,
    onBackgroundDark,
    pdHs,
    pdH,
} from 'src/styles/index';

const OTPSend = () => {
    const { colors } = useTheme();
    const style = styles(colors);

    const TopView = () => (
        <View>
            <GapV xL />

            <Image
                resizeMode="contain"
                source={icons.auth.smsPhone}
                style={[style.image]}
            />
        </View>
    );

    const Content = () => (
        <View>
            <GapV large />

            <CustomTitle style={[style.title]}>
                {`Enter your mobile number to create account.`}
            </CustomTitle>

            <GapV />

            <CustomSubheading style={[style.subText]}>
                {`We will send you one time password (OTP)`}
            </CustomSubheading>
        </View>
    );

    const PhoneNumber = () => (
        <Animated.View
            entering={entering}
            exiting={exiting}
            style={[style.card]}>
            <GapV />

            <Form />
        </Animated.View>
    );

    return (
        <View style={[style.container]}>
            <ScrollView contentContainerStyle={[style.content]}>
                {TopView()}
                {Content()}
                {PhoneNumber()}
                <GapV />
            </ScrollView>
        </View>
    );
};

export default OTPSend;

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
            height: 100,
            width: 100,
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
            fontSize: 22,
        },

        title: {
            fontWeight: 'bold',
            fontSize: 24,
        },

        icon: { alignSelf: 'center' },

        avatarStyle: {},

        avatarContainer: {
            borderRadius: bRl,
            backgroundColor: 'blue',
            alignSelf: 'center',
            padding: mgS,
            position: 'absolute',
            top: -30,
        },
    });
