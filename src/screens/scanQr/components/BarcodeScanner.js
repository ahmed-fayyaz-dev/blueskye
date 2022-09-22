import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useTheme } from 'react-native-paper';

export default function QrScanner() {
    const { colors } = useTheme();
    const style = styles(colors);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={style.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? false : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
                // <Image
                //     resizeMode="contain"
                //     source={icons.auth.checkmark}
                //     style={style.image}
                // />
                <View style={style.image}>
                    <AntDesign
                        name="exclamationcircleo"
                        size={100}
                        color={colors.primary}
                    />
                </View>
            )}
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
