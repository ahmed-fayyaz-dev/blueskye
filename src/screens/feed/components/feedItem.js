import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

import { converDate } from 'src/helpers';
import { mgM, mgMs, pdHs, pdVs } from 'src/styles';
import { BackgroundImage } from './itemImage';
import { CustomText } from 'src/components/customText';

const BLURVIEW_INTENSITY = 200;

const FeedItem = ({ item }) => {
    const { postImage, creationTime } = item;
    const date = converDate(creationTime);

    return (
        <View style={styles.content}>
            <BackgroundImage uri={postImage}>
                <BlurView
                    intensity={BLURVIEW_INTENSITY}
                    style={styles.blurContainer}>
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
    },
});
