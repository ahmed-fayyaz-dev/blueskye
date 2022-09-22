import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { mgS, pdHs, bRss, mgMs, pdHm } from 'src/styles';
import { CustomSubheading, CustomText } from 'src/components/customText';
import { Surface } from 'react-native-paper';

const RenderList = ({ item }) => {
    const price = 'Rs 30,522';
    const heading = 'Tution Fee';

    return (
        <Surface style={styles.listItem}>
            <View>
                <CustomText style={styles.title}>{heading}</CustomText>
                <CustomText style={styles.date}>{item.date}</CustomText>
            </View>

            <CustomText style={styles.price}>{price}</CustomText>
        </Surface>
    );
};

export default RenderList;

const styles = StyleSheet.create({
    listItem: {
        elevation: 4,
        borderRadius: bRss,
        flexDirection: 'row',
        paddingVertical: mgMs,
        paddingHorizontal: pdHm,
        justifyContent: 'space-between',
    },

    title: {
        color: '#0E2054',
        fontWeight: 'bold',
        fontSize: 15,
    },

    date: {
        alignSelf: 'flex-start',
    },

    price: {
        color: '#0BA77B',
        textAlignVertical: 'bottom',
    },
});
