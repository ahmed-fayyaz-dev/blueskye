import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { pdVss, primaryColor } from 'src/styles';

export function DividerV({ m, l, xl, ...props }) {
    return (
        <Divider
            style={[
                m
                    ? style.dividerM
                    : l
                    ? style.dividerL
                    : xl
                    ? style.dividerXl
                    : style.divider,
            ]}
            {...props}
        />
    );
}

const style = StyleSheet.create({
    dividerM: {
        alignSelf: 'center',
        // backgroundColor: onBackgroundDark,
        height: 1,
        width: '80%',
    },

    divider: {
        alignSelf: 'center',
        // backgroundColor: onBackgroundDark,
        height: 1,
        width: '100%',
    },

    dividerL: {
        alignSelf: 'center',
        // backgroundColor: primaryColor,
        height: pdVss,
        width: '100%',
    },

    dividerXl: {
        alignSelf: 'center',
        // backgroundColor: primaryColor,
        height: pdVss,
        width: '100%',
    },
});
