import React from 'react';
import { View, StyleSheet } from 'react-native';

import { convertDate, parseDate } from 'src/helpers';
import { pdHs, pdVs } from 'src/styles';
import { CustomCaption, CustomText } from 'src/components/customText';

const renderItem = ({ item, index }) => {
    let { mid, vNo, vDate, dr, cr, vType, narration, balance } = item;

    let date = '';

    try {
        const parsedDate = parseDate(vDate);
        date = convertDate(parsedDate);
        dr = Number(dr).toFixed(0);
        cr = Number(cr).toFixed(0);
        balance = Number(balance).toFixed(0);
    } catch (e) {
        console.error(e);
    }

    return (
        <>
            <View style={[styles.row]}>
                <CustomText style={[styles.date]}>{`${date}`}</CustomText>

                <CustomText style={[styles.ammount]}>{`${dr}`}</CustomText>
                <CustomText style={[styles.ammount]}>{`${cr}`}</CustomText>
                <CustomText
                    style={[styles.otherTitles]}>{`${vType}`}</CustomText>
                <CustomText style={[styles.otherTitles]}>{`${vNo}`}</CustomText>
                <CustomText
                    style={[styles.narration]}>{`${narration}`}</CustomText>
                <CustomText style={[styles.balance]}>{`${balance}`}</CustomText>
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

    otherTitles: {
        width: 100,
        textAlign: 'left',
        paddingHorizontal: pdHs,
    },

    ammount: {
        width: 70,
        textAlign: 'right',
        paddingHorizontal: pdHs,
    },

    narration: {
        width: 220,
        textAlign: 'left',
        paddingHorizontal: pdHs,
    },

    balance: {
        width: 100,
        textAlign: 'right',
        paddingHorizontal: pdHs,
    },
});

export default renderItem;
