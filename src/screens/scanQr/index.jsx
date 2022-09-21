import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import AppBar from 'src/components/appbar';
import { icons } from 'assets/images';
import { CustomRoundButton } from 'src/components/buttons';
import { CustomSubheading } from 'src/components/customText';
import { GapV } from 'src/components/gap';
import globalStyles, { bRss, mgM, mgMs, pdH } from 'src/styles/index';
import QrScanner from './components/BarcodeScanner';

const ScanQR = ({ navigation }) => {
    const [onPress, setOnPress] = useState(false);
    const { colors } = useTheme();
    const style = styles(colors);
    const title = 'Scan QR';

    const openCamera = () => {
        setOnPress(!onPress);
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
            {onPress ? (
                <Image
                    resizeMode="contain"
                    source={icons.tab.qr}
                    style={[style.qr]}
                />
            ) : (
                <QrScanner setShowQR={setOnPress} />
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

export default ScanQR;

const styles = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
        },

        card: {
            borderRadius: bRss,
            paddingTop: mgMs,
            paddingHorizontal: pdH,
        },

        content: {
            flexGrow: 1,
            paddingHorizontal: pdH,
            paddingTop: mgM,
        },

        image: {
            alignSelf: 'center',
            height: 60,
            width: 60,
        },
        camera: {
            paddingTop: pdH,
        },

        qr: {
            alignSelf: 'center',
            height: 200,
            width: 200,
        },

        fdr: { flexDirection: 'row' },

        subText: {
            color: colors.light,
            fontSize: 20,
        },

        button: {
            backgroundColor: colors.primary,
            alignSelf: 'center',
        },

        bottomView: { justifyContent: 'center' },
    });
