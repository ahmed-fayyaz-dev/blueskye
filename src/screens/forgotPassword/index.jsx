import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { CustomSubheading, CustomTitle } from 'src/components/customText';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { GapV } from 'src/components/gap';
import globalStyles, {
    bRl,
    bRss,
    mgM,
    mgMs,
    mgS,
    onBackgroundDark,
    pdHs,
    pdH,
} from 'src/styles/index';
import CustomInput from 'src/components/CustomInput';
import { CustomRoundButton } from 'src/components/buttons';

const ForgotPassword = ({ navigation }) => {
    const { colors } = useTheme();
    const style = styles(colors);

    const handleSend = () => {};

    const goBack = () => {
        navigation.goBack();
    };

    const TopView = () => (
        <View>
            <GapV xL />

            <TouchableOpacity style={[style.backArrow]} onPress={goBack}>
                <Ionicons name="arrow-back" size={40} color="black" />
            </TouchableOpacity>

            <MaterialCommunityIcons
                name="account-lock"
                size={100}
                color={colors.secondary}
                resizeMode="contain"
                style={[style.image]}
            />
        </View>
    );

    const Content = () => (
        <View>
            <GapV large />

            <CustomTitle style={[style.title]}>
                {`Enter your email to recieve a recovery link.`}
            </CustomTitle>

            <GapV />

            <CustomSubheading style={[style.subText]}>
                {`We will send you a one time link.`}
            </CustomSubheading>
        </View>
    );

    const PhoneNumber = () => (
        <View style={[style.card]}>
            <CustomInput label="Email" />

            <GapV />

            <CustomRoundButton title={'SEND'} onPress={handleSend} />
        </View>
    );

    return (
        <View style={[style.container]}>
            <ScrollView contentContainerStyle={[style.content]}>
                {TopView()}
                {Content()}
                {PhoneNumber()}
                <GapV />
            </ScrollView>
        </View>
    );
};

export default ForgotPassword;

const styles = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
        },

        card: {
            borderRadius: bRss,
            paddingTop: mgMs,
            paddingHorizontal: pdH,
        },

        content: {
            flexGrow: 1,
            paddingHorizontal: pdHs,
            paddingTop: mgM,
        },

        image: {
            alignSelf: 'center',
        },

        fdr: { flexDirection: 'row' },

        divider: {
            alignSelf: 'center',
            backgroundColor: onBackgroundDark,
            height: 1,
            width: '80%',
        },

        subText: {
            color: '#999999',
            fontSize: 22,
        },

        title: {
            fontWeight: 'bold',
            fontSize: 24,
        },

        icon: { alignSelf: 'center' },

        avatarStyle: {},

        avatarContainer: {
            borderRadius: bRl,
            backgroundColor: 'blue',
            alignSelf: 'center',
            padding: mgS,
            position: 'absolute',
            top: -30,
        },
        backArrow: {
            position: 'absolute',
            paddingTop: 30,
        },
    });
