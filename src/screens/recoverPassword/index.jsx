import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme, Surface } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CustomSubheading, CustomTitle } from 'src/components/customText';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { GapV } from 'src/components/gap';
import { bRss, mgM, mgMs, pdHs, pdHm } from 'src/styles/index';
import { Form } from './components/form';
import { showSnack } from 'src/helpers/utils';
import { recoverPasswordAction } from './actions';
import { callApi } from 'src/helpers/apiCall';

const RecoverPassword = ({ navigation, route, recoverPasswordAction }) => {
    const { colors } = useTheme();
    const style = styles(colors);
    const { params } = route;
    const userData = params?.userData;
    // const navToRecoverPass = () => {};

    const goBack = () => {
        navigation.goBack();
    };

    const navigate = res => {
        showSnack('Success');

        setTimeout(() => {
            navigation.navigate('login');
        }, 1000);
    };

    const handleSubmit = async values => {
        try {
            const { accessCode, password, confirmPassword } = values;
            const { email, phone, vid, vName } = userData;
            const data = {
                accessCode: accessCode,
                confirmPassword: confirmPassword,
                email: email,
                password: password,
                phone: phone,
                vName: vName,
                vid: vid,
            };

            await callApi({
                data: data,
                setLoading: () => {},
                submitCallApi: recoverPasswordAction,
                successFunc: navigate,
                errFunc: () => {},
                catchFunc: () => {},
            });
        } catch (e) {
            console.error(e);
            return showSnack('Api Response Error try again!');
        }
    };

    const TopView = () => (
        <View>
            <GapV large />

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
        <>
            <GapV large />

            <CustomTitle style={[style.title]}>
                {`Enter your recovery access code.`}
            </CustomTitle>

            <GapV />

            <CustomSubheading style={[style.subText]}>
                {`We've sent you access code on email.`}
            </CustomSubheading>

            <GapV />

            <Surface style={style.card}>
                <Form onSubmit={handleSubmit} />
            </Surface>
        </>
    );

    return (
        <View style={[style.container]}>
            <ScrollView contentContainerStyle={[style.content]}>
                {TopView()}
                {Content()}
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
            recoverPasswordAction,
        },
        dispatch,
        getState,
    );
}

export default connect(mapStateToProps, mapDipatchToProps)(RecoverPassword);

const styles = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
        },

        card: {
            elevation: 4,
            paddingTop: mgMs,
            borderRadius: bRss,
            marginHorizontal: mgM,
            paddingHorizontal: pdHm,
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
