import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { icons } from 'assets/images';
import { scanQrAction } from './actions';
import QrScanner from './components/BarcodeScanner';
import AppBar from 'src/components/appbar';
import { CustomRoundButton } from 'src/components/buttons';
import { CustomSubheading } from 'src/components/customText';
import { GapV } from 'src/components/gap';
import { callApi } from 'src/helpers/apiCall';
import { showSnackLong, showSnack } from 'src/helpers/utils';
import { bRss, mgM, mgMs, pdH } from 'src/styles/index';
import { IonIcons } from 'src/helpers';

const ScanQR = ({ scanQrAction }) => {
    const [openCamera, setOpenCamera] = useState(false);
    const [showTick, setShowTick] = useState(false);
    const [showQR, setShowQR] = useState(true);
    const [buttonTitle, setButtonTitle] = useState('SCAN QR CODE');
    const { colors } = useTheme();
    const style = styles(colors);

    const showQRScanner = () => {
        setOpenCamera(true);
        setShowTick(false);
        setShowQR(false);
    };

    const handleSuccess = res => {
        try {
            const { message } = res;
            setShowTick(true);
            showSnackLong(message + `✅ `);
            setButtonTitle('SCAN QR AGAIN');
        } catch (e) {
            showSnack('Try Again');
        }
    };

    const handleSubmit = async data => {
        setOpenCamera(!openCamera);

        try {
            await callApi({
                data,
                setLoading: () => {},
                submitCallApi: scanQrAction,
                successFunc: handleSuccess,
                errFunc: () => {},
                catchFunc: () => {},
            });
        } catch (e) {
            console.error(e);
            return showSnack('Api Response Error try again!');
        }
    };

    const TopView = () => (
        <>
            <GapV large />

            <Image
                resizeMode="contain"
                source={icons.tab.camera}
                style={[style.image]}
            />
            <GapV small />

            <CustomSubheading
                style={
                    style.subText
                }>{`Please move your code to QR CODE`}</CustomSubheading>
        </>
    );

    const IconComponent = () => (
        <>
            <GapV />
            {showTick ? (
                <IonIcons name="checkmark-circle" size={200} style={style.qr} />
            ) : null}
        </>
    );

    const QRScanner = () => (
        <>
            <GapV large />
            {showQR ? (
                <Image source={icons.tab.qr} style={style.qrLogo} />
            ) : null}
            {openCamera ? <QrScanner handleScan={handleSubmit} /> : null}
        </>
    );

    const BottomView = () => (
        <View style={style.bottomView}>
            <GapV large />
            <CustomRoundButton
                icon={icons.drawer.scanQr}
                title={buttonTitle}
                style={style.button}
                onPress={showQRScanner}
            />
        </View>
    );

    return (
        <View style={[style.container]}>
            <ScrollView contentContainerStyle={style.content}>
                {TopView()}

                {QRScanner()}
                {IconComponent()}
                {BottomView()}

                <GapV />
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
            scanQrAction,
        },
        dispatch,
        getState,
    );
}

export default connect(mapStateToProps, mapDipatchToProps)(ScanQR);

const styles = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
        },

        card: {
            paddingTop: mgMs,
            borderRadius: bRss,
            paddingHorizontal: pdH,
        },

        content: {
            flexGrow: 1,
            paddingTop: mgM,
            paddingHorizontal: pdH,
        },

        image: {
            width: 60,
            height: 60,
            alignSelf: 'center',
        },
        camera: {
            paddingTop: pdH,
        },

        qr: {
            alignSelf: 'center',
            color: colors.primary,
        },
        qrLogo: {
            width: 200,
            height: 200,
            alignSelf: 'center',
            color: colors.primary,
        },

        subText: {
            fontSize: 20,
            color: colors.light,
        },

        button: {
            alignSelf: 'center',
            backgroundColor: colors.primary,
        },

        bottomView: { justifyContent: 'center' },
    });
