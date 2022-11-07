import React, { useState } from 'react';
// import i18n from "i18n-js";
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { icons } from 'assets/images';
import OtpCodeField from './Components/OtpCodeField';
import { verifyOtpAction, resendOtpAction } from './actions';
import { CustomSubheading, CustomTitle } from 'src/components/customText';
import { GapV } from 'src/components/gap';
// import { CustomSnackbar } from 'src/components/customSnackbar';
import { callApi } from 'src/helpers/apiCall';
import { showSnack } from 'src/helpers/utils';
import gloabalStyle, { mgM, pdHs } from 'src/styles/index';

const OtpVerify = ({ route, navigation, verifyOtpAction, resendOtpAction }) => {
    // const phone = route.params.phone;
    const email = route.params.email;
    const { colors } = useTheme();
    const gStyle = gloabalStyle();
    const style = styles(colors);

    const onSuccess = r => {
        showSnack(r?.message);
        // console.log("Here")

        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'drawerNav' }],
            });
        }, 1000);
    };

    const verifyHandle = async value => {
        const data = {
            otp: value,
        };
        if(data.otp) {  
            await callApi({
                data,
                setLoading: () => {},
                submitCallApi: verifyOtpAction,
                successFunc: onSuccess,
                errFunc: () => {},
                catchFunc: () => {},
            });
    }
    };

    const onResendSuccess = r => {
        showSnack(r?.message);
    };

    const resendHandle = async () => {
        await callApi({
            data: {},
            setLoading: () => {},
            submitCallApi: resendOtpAction,
            successFunc: onResendSuccess,
            errFunc: () => {},
            catchFunc: () => {},
        });
    };

    const TopView = () => (
        <View>
            <GapV large />

            <Image
                resizeMode="contain"
                source={icons.auth.checkmark}
                style={style.image}
            />
        </View>
    );

    const Content = () => (
        <View>
            <GapV large />

            <CustomTitle style={[style.title]}>
                {`Email Verification needed.`}
            </CustomTitle>

            <GapV />

            <CustomSubheading style={[style.subText]}>
                {/* {`We have send the OTP on ${phone} it will be applied automatically to the fields.`} */}
                {`We have send the OTP on ${email}. Enter the OTP below.`}
            </CustomSubheading>
        </View>
    );

    return (
        <View style={[style.container, gStyle.content]}>
            <ScrollView style={style.content}>
                {TopView()}
                {Content()}
                <OtpCodeField
                    verifyHandle={verifyHandle}
                    resendHandle={resendHandle}
                />
            </ScrollView>
        </View>
    );
};

function mapStateToProps() {
    return {};
}

function mapDipatchToProps(dispatch, getState) {
    return bindActionCreators(
        {
            verifyOtpAction,
            resendOtpAction,
        },
        dispatch,
        getState,
    );
}

export default connect(mapStateToProps, mapDipatchToProps)(OtpVerify);

const styles = colors =>
    StyleSheet.create({
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

        title: {
            fontSize: 24,
            fontWeight: 'bold',
        },

        subText: {
            fontSize: 20,
            color: colors.muted,
        },
    });
