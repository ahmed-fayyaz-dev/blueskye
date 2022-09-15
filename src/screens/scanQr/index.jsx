import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

import { icons } from 'assets/images';
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

const ScanQR = () => {
    const { colors } = useTheme();
    const style = styles(colors);

    const TopView = () => (
        <View style={style.camera}>
            <GapV large />

            <Image
                resizeMode="contain"
                source={icons.tab.camera}
                style={[style.image]}
            />
            <GapV small />
            <CustomSubheading
                style={style.subText}
                numberOfLines={
                    2
                }>{`Please move your code to QR CODE`}</CustomSubheading>
        </View>
    );

    const QR = () => (
        <View>
            <GapV large />
            <Image
                resizeMode="contain"
                source={icons.tab.qr}
                style={[style.qr]}
            />
        </View>
    );

    const BottomView = () => (
        <View style={style.card}>
            <GapV large />
            <CustomRoundButton
                icon={icons.drawer.scanQr}
                title={`Scan QR Code`}
                style={style.button}
            />
        </View>
    );

    return (
        <View style={[style.container]}>
            <ScrollView style={style.content}>
                {TopView()}
                {QR()}
                {BottomView()}
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
        camera: {
            paddingTop: pdH,
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
            borderRadius: bRl,
            backgroundColor: 'blue',
            alignSelf: 'center',
            padding: mgS,
            position: 'absolute',
            top: -30,
        },

        button: {
            width: '60%',
            alignSelf: 'center',
        },
    });
