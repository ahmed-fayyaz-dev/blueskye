import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Chip } from 'react-native-paper';
import { GapV } from 'src/components/gap';
import * as Linking from 'expo-linking';

import {
    CustomTitle,
    CustomText,
    CustomHeadline,
    CustomSubheading,
    CustomCaption,
} from 'src/components/customText';
import { greenColor, mgM, pdHs } from 'src/styles/index';
import { DividerV } from 'src/components/divider';
import { CustomRoundButton } from 'src/components/buttons';

const InfoText = ({ title, value }) => (
    <>
        <CustomTitle style={styles.title}>{title}</CustomTitle>
        <CustomSubheading style={styles.text}>{value}</CustomSubheading>

        <GapV small />
    </>
);

const PipeLine = () => (
    <>
        <CustomTitle style={styles.title}>{`Pipeline`}</CustomTitle>
        <View style={{ flexDirection: 'row' }}>
            <Chip>{`Language`}</Chip>
            <Chip>{`Study Abroad`}</Chip>
        </View>
    </>
);

const ProfileInfo = () => (
    <>
        <CustomHeadline style={styles.heading}>{`Ahmed Fayyaz`}</CustomHeadline>
        <CustomText style={styles.text}>
            {`Status : `}
            <CustomText style={styles.status}>{`Open`}</CustomText>
        </CustomText>
        <DividerV />

        <GapV small />

        <InfoText title="Email" value="ahmedfayyaz@gmail.com" />
        <InfoText title="Phone No" value="03066808743" />
        <InfoText title="DOB" value="28/12/1996" />
        <InfoText title="Job Title" value="Dev" />

        <PipeLine />

        {/* <GapV /> */}
    </>
);

const Support = () => {
    const openLinkContactUs = () => {
        Linking.openURL('https://blueskyconsultancy.com.pk/contact_us/');
    };
    const openLinkAboutUs = () => {
        Linking.openURL('https://blueskyconsultancy.com.pk/');
    };

    return (
        <>
            <CustomHeadline style={styles.heading}>{`Support`}</CustomHeadline>
            <DividerV />

            <CustomRoundButton
                mode="text"
                title={'Contact Us'}
                onPress={openLinkContactUs}
                icon="arrow-forward"
                contentStyle={styles.supportButton}
            />
            <CustomRoundButton
                mode="text"
                title={'About Us'}
                onPress={openLinkAboutUs}
                icon="arrow-forward"
                contentStyle={styles.supportButton}
            />
        </>
    );
};

const Content = () => {
    return (
        <View style={styles.content}>
            <ProfileInfo />
            <GapV />

            <Support />
        </View>
    );
};

export default Content;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: pdHs,
        paddingTop: mgM,
    },

    heading: {
        fontWeight: 'bold',
        textAlign: 'left',
    },

    title: {
        textAlign: 'left',
    },

    text: {
        textAlign: 'left',
    },

    status: {
        textAlign: 'left',
        color: greenColor,
    },

    supportButton: {
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
    },
});
