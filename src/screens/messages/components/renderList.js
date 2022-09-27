import React from 'react';
import { StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';
import { bRss, greenColor, pdHm } from 'src/styles';
import {
    CustomCaption,
    CustomText,
    CustomTitle,
} from 'src/components/customText';
import { convertDate, parseDate } from 'src/helpers';

import ReadMore from '@fawazahmed/react-native-read-more';
import { GapV } from 'src/components/gap';

const renderItem = ({ item }) => {
    let { contactID, vType, vDate, userMessage } = item;

    try {
        const parsedDate = parseDate(vDate);
        vDate = convertDate(parsedDate);
    } catch (e) {
        console.error(e);
    }

    return (
        <>
            <Surface style={styles.listItem}>
                <CustomTitle style={styles.title}>{`${vType}`}</CustomTitle>

                <ReadMore
                    numberOfLines={3}
                    style={styles.body}
                    seeMoreText={'Read More'}
                    seeLessText={'Read Less'}
                    seeLessStyle={styles.readMore}
                    seeMoreStyle={styles.readMore}>
                    {`${userMessage}`}
                </ReadMore>

                <CustomCaption style={styles.date}>{`${vDate}`}</CustomCaption>
            </Surface>
            <GapV small />
        </>
    );
};

export default renderItem;

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
