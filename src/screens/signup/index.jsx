import React from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { icons } from 'assets/images';
import { setStorageItem } from 'src/helpers';
import { signupAction } from './actions';
import { Form } from './components/form';
import { GapV } from 'src/components/gap';
import { entering, exiting } from 'src/helpers/animation';
import { callApi } from 'src/helpers/apiCall';
import { ONBOARD, ID, PASSWORD } from 'src/helpers/constants';
import globalStyles, {
    bRl,
    bRss,
    mgM,
    mgMs,
    mgS,
    onBackgroundDark,
    pdHm,
    pdHs,
} from 'src/styles/index';

function Signup({ navigation, signupAction }) {
    const { colors } = useTheme();
    const style = styles(colors);
    const gStyle = globalStyles();

    const navigate = apiReturn => {
        const phoneNumber = apiReturn?.crmStudentUser?.phone;

        navigation.navigate('otpSend', {
            phone: phoneNumber,
        });
    };

    const handleSubmit = async data => {
        if (data.remember) {
            setStorageItem(ID, data.email);
            setStorageItem(PASSWORD, data.password);
            setStorageItem(ONBOARD, true);
        }

        await callApi({
            data,
            setLoading: () => {},
            submitCallApi: signupAction,
            successFunc: navigate,
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
        </View>
    );

    const SingupCard = () => (
        <Animated.View
            entering={entering}
            exiting={exiting}
            style={[style.card]}>
            <Form onSubmit={handleSubmit} />
        </Animated.View>
    );

    return (
        <View style={[style.container]}>
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
            borderRadius: bRss,
            paddingTop: mgMs,
            paddingHorizontal: pdHm,
            borderWidth: StyleSheet.hairlineWidth,
        },

        content: {
            flexGrow: 1,
            paddingHorizontal: pdHs,
            paddingTop: mgM,
        },

        image: {
            alignSelf: 'center',
            height: 140,
            width: 144,
        },

        fdr: { flexDirection: 'row' },

        divider: {
            alignSelf: 'center',
            backgroundColor: onBackgroundDark,
            height: 1,
            width: '80%',
        },

        subText: {
            color: onBackgroundDark,
        },

        title: {
            fontWeight: 'bold',
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
    });
