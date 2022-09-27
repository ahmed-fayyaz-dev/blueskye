import React from 'react';
import { View, StyleSheet } from 'react-native';

import { convertDate, parseDate } from 'src/helpers';
import { pdHs, pdVs } from 'src/styles';
import { CustomText } from 'src/components/customText';

const ListItem = ({ item }) => {
    let { vDate, vName, dateIn, dateOut } = item;

    try {
        vDate = parseDate(vDate);
        vDate = convertDate(vDate);

        dateIn = parseDate(dateIn);
        dateIn = convertDate(dateIn);

        dateOut = parseDate(dateOut);
        dateOut = convertDate(dateOut);
    } catch (e) {
        console.error(e);
    }

    return (
        <>
            <View style={[styles.row]}>
                <CustomText style={styles.values}>{vDate}</CustomText>
                <CustomText style={styles.values}>{dateIn}</CustomText>
                <CustomText style={styles.values}>{dateOut}</CustomText>
                <CustomText style={styles.values}>{vName}</CustomText>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: pdHs,
        paddingVertical: pdVs,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    values: {
        width: 100,
        textAlign: 'left',
        paddingHorizontal: pdHs,
    },
});

export default ListItem;
