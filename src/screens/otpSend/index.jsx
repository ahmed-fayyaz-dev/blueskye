import React from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { icons } from 'assets/images';
// import { Form } from './components/form';
import CustomInput from 'src/components/CustomInput';
import { CustomRoundButton } from 'src/components/buttons';
import { CustomSubheading, CustomTitle } from 'src/components/customText';
import { GapV } from 'src/components/gap';
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

const OTPSend = ({ navigation, route }) => {
    const { colors } = useTheme();
    const style = styles(colors);
    // const phone = route.params.phone;
    const email = route.params.email;

    const handleSend = () => {
        navigation.navigate('otpVerify', {
            // phone: phone,
            email,
        });
    };

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
                {`Verifying your email to create account.`}
            </CustomTitle>

            <GapV />

            <CustomSubheading style={[style.subText]}>
                {`We have sent you one time password (OTP) on following mail`}
            </CustomSubheading>
        </View>
    );

    const PhoneNumber = () => (
        <View style={[style.card]}>
            <CustomInput label="Email address" value={email} disabled />

            <GapV />

            <CustomRoundButton title={'NEXT'} onPress={handleSend} />
        </View>
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
            paddingTop: mgMs,
            borderRadius: bRss,
            paddingHorizontal: pdH,
            // borderWidth: StyleSheet.hairlineWidth,
        },

        content: {
            flexGrow: 1,
            paddingTop: mgM,
            paddingHorizontal: pdHs,
        },

        image: {
            width: 100,
            height: 100,
            alignSelf: 'center',
        },

        fdr: { flexDirection: 'row' },

        divider: {
            height: 1,
            width: '80%',
            alignSelf: 'center',
            backgroundColor: onBackgroundDark,
        },

        subText: {
            fontSize: 22,
            color: '#999999',
        },

        title: {
            fontSize: 24,
            fontWeight: 'bold',
        },

        icon: { alignSelf: 'center' },

        avatarStyle: {},

        avatarContainer: {
            top: -30,
            padding: mgS,
            borderRadius: bRl,
            alignSelf: 'center',
            position: 'absolute',
            backgroundColor: 'blue',
        },
    });
