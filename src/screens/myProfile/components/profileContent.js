import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import { Chip } from 'react-native-paper';
import { connect } from 'react-redux';

import { CustomRoundButton } from 'src/components/buttons';
import {
    CustomTitle,
    CustomText,
    CustomHeadline,
    CustomSubheading,
} from 'src/components/customText';
import { DividerV } from 'src/components/divider';
import { GapV } from 'src/components/gap';

import { greenColor, mgM, pdHs } from 'src/styles/index';

const InfoText = ({ title, value }) => (
    <>
        <CustomTitle style={styles.title}>{title}</CustomTitle>

        <CustomSubheading style={styles.text}>{`${value}`}</CustomSubheading>

        <GapV small />
    </>
);

const PipeLine = ({ pipeline }) => (
    <>
        <CustomTitle style={styles.title}>{`Work flow`}</CustomTitle>

        <View style={styles.chipsView}>
            {pipeline?.map((item, index) => (
                <Chip key={index}>{item}</Chip>
            ))}
        </View>
    </>
);

const ProfileInfo = ({ userData }) => {
    const {
        dob,
        email,
        fName,
        lName,
        jobTitile,
        phone,
        pipeline,
        statusName,
        vName,
    } = userData;

    return (
        <>
            <CustomHeadline style={styles.heading}>{vName}</CustomHeadline>
            <CustomText style={styles.text}>
                {`Status : `}
                <CustomText style={styles.status}>{statusName}</CustomText>
            </CustomText>
            <DividerV />

            <GapV small />

            <InfoText title="Email" value={email} />
            <InfoText title="Job Title" value={jobTitile} />
            <InfoText title="Phone No" value={phone} />
            <InfoText title="DOB" value={dob} />

            <PipeLine pipeline={pipeline} />

            {/* <GapV /> */}
        </>
    );
};

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

            <GapV small />

            <CustomRoundButton
                mode="outline"
                title={'Contact Us'}
                onPress={openLinkContactUs}
                icon="arrow-forward"
                contentStyle={styles.supportButton}
            />
            <CustomRoundButton
                mode="outline"
                title={'About Us'}
                onPress={openLinkAboutUs}
                icon="arrow-forward"
                contentStyle={styles.supportButton}
            />
        </>
    );
};

const Content = ({ loginUserReducer }) => {
    const userData = loginUserReducer.data?.crmStudentUser;

    return (
        <View style={styles.content}>
            {ProfileInfo({ userData })}
            <GapV />

            {Support()}
        </View>
    );
};

function mapStateToProps({ loginUserReducer }) {
    return { loginUserReducer };
}

export default connect(mapStateToProps, {})(Content);

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

    chipsView: { flexDirection: 'row' },

    supportButton: {
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
    },
});
