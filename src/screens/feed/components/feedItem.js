import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

import { convertDate, parseDate } from 'src/helpers';
import { mgM, mgMs, onBackgroundDark, pdHs } from 'src/styles';
import { BackgroundImage } from './itemImage';
import { CustomText } from 'src/components/customText';

const BLURVIEW_INTENSITY = 50;
const BLURVIEW_TINT = 'dark';

const FeedItem = ({ item }) => {
    const { imageUrlPath, vDate } = item;
    const parsedDate = parseDate(vDate);
    const date = convertDate(parsedDate);

    return (
        <View style={styles.content}>
            <BackgroundImage uri={imageUrlPath}>
                <BlurView
                    intensity={BLURVIEW_INTENSITY}
                    style={styles.blurContainer}
                    tint={BLURVIEW_TINT}>
                    <CustomText style={styles.text}>{`${date}`}</CustomText>
                </BlurView>
            </BackgroundImage>
        </View>
    );
};

export default FeedItem;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: pdHs,
        paddingTop: mgM,
    },

    blurContainer: {
        padding: mgMs,
    },

    text: {
        textAlign: 'right',
        color: onBackgroundDark,
    },
});
