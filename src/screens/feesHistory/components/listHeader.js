import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import { onBackgroundDark, pdHs, pdVs } from 'src/styles';
import { CustomSubheading } from 'src/components/customText';

// const Headings = ["Date", "Dr", "Cr", "V-Type", "vNo", "Narration", "Balance"]

const Header = () => {
    const { colors } = useTheme();
    const style = styles(colors);

    return (
        <View style={[style.titlesRow]}>
            <CustomSubheading style={[style.date]}>{`Date`}</CustomSubheading>

            <CustomSubheading
                style={[style.amountTitles]}>{`Dr`}</CustomSubheading>

            <CustomSubheading
                style={[style.amountTitles]}>{`Cr`}</CustomSubheading>

            <CustomSubheading
                style={[style.otherTitles]}>{`V-Type`}</CustomSubheading>

            <CustomSubheading
                style={[style.otherTitles]}>{`V-No`}</CustomSubheading>

            <CustomSubheading
                style={[style.narration]}>{`Narration`}</CustomSubheading>

            <CustomSubheading
                style={[style.balance]}>{`Balance`}</CustomSubheading>
        </View>
    );
};

const styles = colors =>
    StyleSheet.create({
        titlesRow: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: pdHs,
            paddingVertical: pdVs,
            backgroundColor: colors.primary,
        },

        date: {
            width: 100,
            color: onBackgroundDark,
            fontWeight: 'bold',
            textAlign: 'left',
            marginHorizontal: pdHs,
        },

        amountTitles: {
            width: 70,
            color: onBackgroundDark,
            fontWeight: 'bold',
            textAlign: 'left',
            marginHorizontal: pdHs,
        },

        otherTitles: {
            width: 80,
            color: onBackgroundDark,
            fontWeight: 'bold',
            textAlign: 'left',
            marginHorizontal: pdHs,
        },

        balance: {
            width: 100,
            color: onBackgroundDark,
            fontWeight: 'bold',
            textAlign: 'left',
            marginHorizontal: pdHs,
        },

        narration: {
            width: 220,
            textAlign: 'left',
            fontWeight: 'bold',
            color: onBackgroundDark,
            backgroundColor: colors.primary,
            marginHorizontal: pdHs,
        },
    });

export default Header;
