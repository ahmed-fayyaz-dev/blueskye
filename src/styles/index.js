import { StyleSheet, StatusBar, useColorScheme } from 'react-native';

import { colorDictionary } from './theme';

export const pdH = 20;
export const pdHm = 15;
export const pdHs = 10;

export const pdVm = 20;
export const pdVms = 15;
export const pdVs = 10;
export const pdVss = 5;

export const mgxL = 80;
export const mgL = 62;
export const mgM = 20;
export const mgMs = 15;
export const mgS = 10;
export const mgSs = 5;

export const searchBarHeight = 53;
export const iconSize = 18;
export const iconSizeL = 42;
export const buttonHeight = 40;

export const sBh = StatusBar.currentHeight;

export const bRss = 10;
export const bRs = 12;
export const bRms = 18;
export const bRm = 20;
export const bRl = 50;
export const bRxL = 100;

// Fonst Sizes
export const title = 16;
export const text = 11;
export const caption = 9;
export const buttonText = 14;

export const zIndexS = 4;
export const zIndexM = 9;
export const zIndexL = 12;

export const light = 'light';
export const dark = 'dark';

export const onBackgroundDark = colorDictionary.colorSet.dark.onBackground;
export const onBackgroundLight = colorDictionary.colorSet.light.onBackground;
export const primaryColor = colorDictionary.colorSet.light.primary;
export const greenColor = 'green';

export const hitSlopS = {
    top: 30,
    bottom: 30,
    left: 20,
    right: 20,
};

const Styles = () => {
    let appearance = useColorScheme() || light;
    // eslint-disable-next-line no-unused-vars
    let appearanceInv = (useColorScheme() === light ? dark : light) || dark;

    if (appearance === undefined || appearance === null) {
        appearance = light;
    }

    if (appearanceInv === undefined || appearanceInv === null) {
        appearanceInv = dark;
    }

    return StyleSheet.create({
        divider: {
            // backgroundColor: colorDictionary.colorSet[appearance].onBackground,
            height: 1,
            flex: 1,
            alignSelf: 'center',
        },

        container: {
            flex: 1,
            backgroundColor: colorDictionary.colorSet[appearance].background,
        },

        content: {
            flex: 1,
            paddingHorizontal: pdHs,
            paddingTop: mgM,
        },

        contentBody: {
            flex: 1,
            paddingHorizontal: pdHm,
            paddingTop: mgMs,
        },

        contentCenter: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: pdHs,
            paddingTop: pdVm,
        },

        revBottomContainer: {
            flexDirection: 'column-reverse',
            flex: 1,
        },

        elevationM: {
            shadowColor: colorDictionary.colorSet[appearance].shadow,
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            zIndex: zIndexM,
            elevation: 9,
        },

        elevationS: {
            shadowColor: colorDictionary.colorSet[appearance].shadow,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            zIndex: zIndexL,
            elevation: 4,
        },

        listBox: {
            backgroundColor: colorDictionary.colorSet[appearance].surface,
            paddingHorizontal: pdHm,
            paddingVertical: pdVs,
            borderRadius: bRs,
            borderTopWidth: bRs,
            borderColor: colorDictionary.colorSet[appearance].secondary,
            flex: 1,
        },
    });
};

export default Styles;
