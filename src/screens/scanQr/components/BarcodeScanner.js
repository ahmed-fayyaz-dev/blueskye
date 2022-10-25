import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useTheme } from 'react-native-paper';
import { CustomSubheading, CustomText } from 'src/components/customText';

export default function QrScanner({ handleScan }) {
    const { colors } = useTheme();
    const style = styles(colors);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        getBarCodeScannerPermissions();
    }, []);

    const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        handleScan({ type, data });
    };

    if (hasPermission === null) {
        return <CustomText>Requesting for camera permission</CustomText>;
    }
    if (hasPermission === false) {
        return (
            <>
                <CustomText>No access to camera</CustomText>
                <CustomSubheading onPress={getBarCodeScannerPermissions}>
                    Request Permission again
                </CustomSubheading>
            </>
        );
    }
    return (
        <View style={style.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? false : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
        </View>
    );
}

const styles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
        },
        image: {
            flex: 1,
            alignSelf: 'center',
        },
    });
