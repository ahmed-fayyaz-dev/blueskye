import React, { useState, useEffect } from 'react';
// import i18n from "i18n-js";
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { icons } from 'assets/images';
import { GapV } from 'src/components/gap';
// import { CustomSnackbar } from 'src/components/customSnackbar';
import OtpCodeField from './Components/OtpCodeField';
import gloabalStyle, { mgM, pdHs } from 'src/styles/index';
import { CustomSubheading, CustomTitle } from 'src/components/customText';

function OtpVerify({ route }) {
    const phone = route.params.phone;
    const { colors } = useTheme();
    const gStyle = gloabalStyle();
    const style = styles(colors);

    const [visibleSnack, setVisibleSnack] = useState(false);

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
                {`Mobile Verification Has Been Succesfully Done.`}
            </CustomTitle>

            <GapV />

            <CustomSubheading style={[style.subText]}>
                {`We have send the OTP on ${phone} it will be applied automatically to the fields.`}
            </CustomSubheading>
        </View>
    );

    return (
        <View style={[style.container, gStyle.content]}>
            <ScrollView style={style.content}>
                {TopView()}
                {Content()}
                <OtpCodeField />
            </ScrollView>
        </View>
    );
}

function mapStateToProps({}) {
    return {};
}

function mapDipatchToProps(dispatch, getState) {
    return bindActionCreators({}, dispatch, getState);
}

export default connect(mapStateToProps, mapDipatchToProps)(OtpVerify);

const styles = colors =>
    StyleSheet.create({
        content: {
            flexGrow: 1,
            paddingHorizontal: pdHs,
            paddingTop: mgM,
        },

        image: {
            width: 100,
            height: 100,
            alignSelf: 'center',
        },

        title: {
            fontWeight: 'bold',
            fontSize: 24,
        },

        subText: {
            color: '#999999',
            fontSize: 20,
        },
    });