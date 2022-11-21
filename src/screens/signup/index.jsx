import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, Surface } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { icons } from 'assets/images';
import { setStorageItem, windowHeigth } from 'src/helpers';
import { signupAction } from './actions';
import { Form } from './components/form';
import { GapV } from 'src/components/gap';
import { callApi } from 'src/helpers/apiCall';
import { ONBOARD, ID, PASSWORD } from 'src/helpers/constants';
import { showSnack } from 'src/helpers/utils';
import globalStyles, {
    bRl,
    bRss,
    mgM,
    mgMs,
    mgS,
    pdHm,
    pdHs,
} from 'src/styles/index';

function Signup({ navigation, signupAction }) {
    const { colors } = useTheme();
    const style = styles(colors);
    const gStyle = globalStyles();

    const goBack = () => {
        navigation.goBack();
    };
    const navigate = apiReturn => {
        // const phoneNumber = apiReturn?.crmStudentUser?.phone;
        const email = apiReturn?.crmStudentUser?.email;
        const message = apiReturn?.message;
        showSnack(message);

        navigation.navigate('otpSend', {
            // phone: phoneNumber,
            email,
        });
    };

    const handleSubmit = async data => {
        const succFunc = res => {
            if (data.remember) {
                setStorageItem(ID, data.email);
                setStorageItem(PASSWORD, data.password);
                setStorageItem(ONBOARD, true);
            }
            setTimeout(() => {
                navigate(res);
            }, 0);
        };

        await callApi({
            data,
            setLoading: () => {},
            submitCallApi: signupAction,
            successFunc: succFunc,
            errFunc: () => {},
            catchFunc: () => {},
        });
    };

    const TopView = () => (
        <View>
            <GapV large />

            <Image
                resizeMode="contain"
                source={icons.app.logoLargeW}
                style={style.image}
            />

            <TouchableOpacity style={[style.backArrow]} onPress={goBack}>
                <Ionicons name="arrow-back" size={40} color="black" />
            </TouchableOpacity>
        </View>
    );

    const SingupCard = () => (
        <Surface style={[style.card]}>
            <Form onSubmit={handleSubmit} />
        </Surface>
    );
    const Ellipses = () => (
        <>
            <View style={style.yellowCircle} />

            <View style={style.blueCircle} />
        </>
    );

    return (
        <View style={[style.container]}>
            {Ellipses()}
            <ScrollView contentContainerStyle={[style.content]}>
                {TopView()}
                {SingupCard()}
                <GapV />
            </ScrollView>
        </View>
    );
}

function mapStateToProps() {
    return {};
}

function mapDipatchToProps(dispatch) {
    return bindActionCreators(
        {
            signupAction,
        },
        dispatch,
    );
}

export default connect(mapStateToProps, mapDipatchToProps)(Signup);

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

        backArrow: {
            paddingTop: 30,
            position: 'absolute',
        },

        image: {
            width: 144,
            height: 140,
            alignSelf: 'center',
        },

        title: {
            fontWeight: 'bold',
        },
        yellowCircle: {
            right: -100,
            width: 200,
            height: 200,
            position: 'absolute',
            borderRadius: 200 / 2,
            backgroundColor: colors.secondary,
            top: Dimensions.get('screen').height * 0.15,
        },

        blueCircle: {
            left: -75,
            width: 150,
            height: 150,
            position: 'absolute',
            borderRadius: 150 / 2,
            top: windowHeigth * 0.81,
            backgroundColor: colors.primary,
        },

        icon: { alignSelf: 'center' },

        avatarStyle: {},

        avatarContainer: {
            top: -30,
            padding: mgS,
            borderRadius: bRl,
            alignSelf: 'center',
            position: 'absolute',
            backgroundColor: 'blue',
        },
    });
