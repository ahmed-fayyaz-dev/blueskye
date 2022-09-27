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
            <CustomSubheading
                style={[style.headingTitle]}>{`Date`}</CustomSubheading>

            <CustomSubheading
                style={[style.headingTitle]}>{`Time in`}</CustomSubheading>

            <CustomSubheading
                style={[style.headingTitle]}>{`Time out`}</CustomSubheading>

            <CustomSubheading
                style={[style.headingTitle]}>{`Remarks`}</CustomSubheading>
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

        headingTitle: {
            width: 100,
            color: onBackgroundDark,
            fontWeight: 'bold',
            textAlign: 'left',
            paddingHorizontal: pdHs,
        },
    });

export default Header;
