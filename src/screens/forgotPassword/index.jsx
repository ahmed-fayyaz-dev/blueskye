import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { forgetPasswordAction } from './actions';
import { CustomSubheading, CustomTitle } from 'src/components/customText';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { GapV } from 'src/components/gap';
import { bRss, mgM, mgMs, pdHs, pdH } from 'src/styles/index';
import { useState } from 'react';
import { Form } from './components/form';
import { callApi } from 'src/helpers/apiCall';
import { showSnack } from 'src/helpers/utils';

const ForgotPassword = ({ navigation, forgetPasswordAction }) => {
    const { colors } = useTheme();
    const style = styles(colors);

    const navigate = response => {
        const userData = response?.crmStudentUser;
        if (userData) {
            navigation.navigate('recoverPassword', { userData });
        } else {
            showSnack('User Data fetch uncorrectly');
        }
    };

    const goBack = () => {
        navigation.goBack();
    };

    async function handleSubmit(values) {
        await callApi({
            data: values,
            setLoading: () => {},
            submitCallApi: forgetPasswordAction,
            successFunc: navigate,
            errFunc: () => {},
            catchFunc: () => {},
        });
    }

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
                {`Enter your email to recieve a recovery code.`}
            </CustomTitle>

            <GapV />

            <CustomSubheading style={[style.subText]}>
                {`We will send you an access code for changing password.`}
            </CustomSubheading>
        </View>
    );

    const BottomView = () => (
        <View style={[style.card]}>
            <Form onSubmit={handleSubmit} />
        </View>
    );

    return (
        <View style={[style.container]}>
            <ScrollView contentContainerStyle={[style.content]}>
                {TopView()}
                {Content()}
                {BottomView()}
                <GapV />
            </ScrollView>
        </View>
    );
};

function mapStateToProps() {
    return {};
}

function mapDipatchToProps(dispatch, getState) {
    return bindActionCreators(
        {
            forgetPasswordAction,
        },
        dispatch,
        getState,
    );
}

export default connect(mapStateToProps, mapDipatchToProps)(ForgotPassword);

const styles = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
        },

        card: {
            paddingTop: mgMs,
            borderRadius: bRss,
            paddingHorizontal: pdH,
        },

        content: {
            flexGrow: 1,
            paddingTop: mgM,
            paddingHorizontal: pdHs,
        },

        image: {
            alignSelf: 'center',
        },

        subText: {
            fontSize: 22,
            color: colors.placeholder,
        },

        title: {
            fontSize: 24,
            fontWeight: 'bold',
        },

        icon: { alignSelf: 'center' },

        backArrow: {
            paddingTop: 30,
            position: 'absolute',
        },
    });
