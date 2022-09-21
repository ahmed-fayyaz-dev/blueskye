import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { mgS, pdHs, bRss, mgMs, pdHm } from 'src/styles';
import { CustomSubheading, CustomText } from 'src/components/customText';
import { Surface } from 'react-native-paper';

const RenderList = ({ item }) => {
    const price = 30522;
    const heading = 'Tution Fee';

    return (
        <Surface style={styles.listItem}>
            <View>
                <CustomSubheading style={styles.title}>
                    {heading}
                </CustomSubheading>
                <CustomText>{item.date}</CustomText>
            </View>

            <CustomText style={styles.price}>{price}</CustomText>
        </Surface>
    );
};

export default RenderList;

const styles = StyleSheet.create({
    listItem: {
        elevation: 4,
        borderRadius: bRss,
        flexDirection: 'row',
        paddingVertical: mgMs,
        paddingHorizontal: pdHm,
        justifyContent: 'space-between',
    },

    title: {
        fontWeight: 'bold',
    },

    price: {
        color: '#0BA77B',
        textAlignVertical: 'bottom',
    },
});
