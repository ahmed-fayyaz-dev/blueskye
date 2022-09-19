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
