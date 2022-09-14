import React from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { icons } from 'assets/images';
import { IonIcons, setStorageItem } from 'src/helpers';
import { loginAction } from './actions';
import { Form } from './components/form';
import { CustomRoundButton } from 'src/components/buttons';
import { CustomTitle } from 'src/components/customText';
import { GapV } from 'src/components/gap';
import { entering, exiting } from 'src/helpers/animation';
import { callApi } from 'src/helpers/apiCall';
import { ONBOARD, ID, PASSWORD } from 'src/helpers/constants';
import globalStyles, {
    bRl,
    bRss,
    iconSizeL,
    mgMs,
    mgS,
    onBackgroundDark,
    pdHm,
} from 'src/styles/index';

function Login({ navigation, loginAction }) {
    const { colors } = useTheme();
    const style = styles(colors);
    const gStyle = globalStyles();

    // Navigate
    function navigate() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'drawerNav' }],
        });
    }

    function navToSignup() {
        navigation.navigate('signup');
    }

    // OnLoginPress
    async function handleSubmitLogin(data) {
        if (data.remember) {
            setStorageItem(ID, data.email);
            setStorageItem(PASSWORD, data.password);
            setStorageItem(ONBOARD, true);
        }

        await callApi({
            data,
            setLoading: () => {},
            submitCallApi: loginAction,
            successFunc: navigate,
            errFunc: () => {},
            catchFunc: () => {},
        });

        // navigate();
    }

    const TopView = () => (
        <View>
            <GapV large />

            <Image
                resizeMode="contain"
                source={icons.app.logoLargeW}
                style={style.image}
            />
            <GapV large />
        </View>
    );

    const AvatarIcon = () => (
        <View style={style.avatarContainer}>
            <IonIcons
                name={'person-outline'}
                size={iconSizeL}
                color={onBackgroundDark}
                style={style.avatarStyle}
            />
        </View>
    );

    const LoginCard = () => (
        <Animated.View
            entering={entering}
            exiting={exiting}
            style={[style.card]}>
            <AvatarIcon />

            <GapV />

            <CustomTitle>{`Please Login to your Account`}</CustomTitle>

            <Form onSubmit={handleSubmitLogin} navigation={navigation} />
        </Animated.View>
    );

    const Signup = () => (
        <CustomRoundButton
            title="SIGN UP"
            mode="TEXT"
            color={colors.secondary}
            style={style.signupButton}
            onPress={navToSignup}
        />
    );

    return (
        <View style={[style.container, gStyle.content]}>
            <ScrollView contentContainerStyle={[style.content]}>
                {TopView()}
                {LoginCard()}
                <GapV />

                {Signup()}
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
            loginAction,
        },
        dispatch,
    );
}

export default connect(mapStateToProps, mapDipatchToProps)(Login);

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

        signupButton: { alignSelf: 'center' },
    });
