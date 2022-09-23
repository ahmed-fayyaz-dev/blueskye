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
import { showSnack } from 'src/helpers/utils';
import { bRss, mgM, mgMs, pdH } from 'src/styles/index';

const ScanQR = ({ navigation, scanQrAction }) => {
    const [onPress, setOnPress] = useState(false);
    const [success, setSuccess] = useState(false);
    const { colors } = useTheme();
    const style = styles(colors);
    const title = 'Scan QR';

    const openCamera = () => {
        setOnPress(!onPress);
    };

    const handleSuccess = res => {
        try {
            const { message } = res;
            showSnack(message + `✅ `);
            setSuccess(true);
        } catch (e) {
            setSuccess(false);
            showSnack('Try Again');
        }
    };

    const handleSubmit = async data => {
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

    const QR = () => (
        <>
            <GapV large />
            {onPress ? null : (
                <QrScanner setShowQR={setOnPress} handleScan={handleSubmit} />
            )}
        </>
    );

    const BottomView = () => (
        <View style={style.bottomView}>
            <GapV large />
            <CustomRoundButton
                icon={icons.drawer.scanQr}
                title={`Scan QR Code`}
                style={style.button}
                onPress={openCamera}
            />
        </View>
    );

    return (
        <View style={[style.container]}>
            <AppBar navigation={navigation} title={title} />
            <ScrollView contentContainerStyle={style.content}>
                {TopView()}
                {QR()}
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
            width: 200,
            height: 200,
            alignSelf: 'center',
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
