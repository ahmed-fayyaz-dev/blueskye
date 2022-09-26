import React from 'react';
import { StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';
import { bRss, greenColor, pdHm } from 'src/styles';
import {
    CustomCaption,
    CustomText,
    CustomTitle,
} from 'src/components/customText';

import ReadMore from '@fawazahmed/react-native-read-more';

const RenderList = ({ item }) => {
    const price = '26/9/22';
    const heading = 'Message Title';

    return (
        <Surface style={styles.listItem}>
            <CustomTitle style={styles.title}>{item.title}</CustomTitle>

            <ReadMore
                numberOfLines={3}
                style={styles.body}
                seeMoreText={'Read More'}
                seeLessText={'Read Less'}
                seeLessStyle={styles.readMore}
                seeMoreStyle={styles.readMore}>
                {item.body}
            </ReadMore>

            <CustomCaption style={styles.date}>{price}</CustomCaption>
        </Surface>
    );
};

export default RenderList;

const styles = StyleSheet.create({
    listItem: {
        elevation: 4,
        borderRadius: bRss,
        paddingHorizontal: pdHm,
    },

    title: {
        alignSelf: 'flex-start',
    },

    body: {
        alignSelf: 'flex-start',
    },

    date: {
        color: greenColor,
        alignSelf: 'flex-end',
    },
    readMore: {
        color: greenColor,
    },
});
