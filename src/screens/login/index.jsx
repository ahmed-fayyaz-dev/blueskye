import React from 'react';
import { ScrollView, View, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Surface, useTheme } from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { icons } from 'assets/images';
import { IonIcons, setStorageItem, windowHeigth } from 'src/helpers';
import { loginAction } from './actions';
import { Form } from './components/form';
import { CustomRoundButton } from 'src/components/buttons';
import { CustomTitle } from 'src/components/customText';
import { GapV } from 'src/components/gap';
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
    mgM,
} from 'src/styles/index';
// import LinearGradient from 'react-native-linear-gradient';

function Login({ navigation, loginAction }) {
    const { colors } = useTheme();
    const style = styles(colors);
    const gStyle = globalStyles();

    // Navigate
    function navigateToLogin() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'drawerNav' }],
        });
    }

    function navToSignup() {
        navigation.navigate('signup');
    }

    function navToForgetPass() {
        navigation.navigate('forgotPassword');
    }

    // OnLoginPress
    async function handleSubmitLogin(data) {
        const succFunc = () => {
            if (data.remember) {
                setStorageItem(ID, data.email);
                setStorageItem(PASSWORD, data.password);
                setStorageItem(ONBOARD, true);
            }
            setTimeout(() => {
                navigateToLogin();
            }, 0);
        };

        await callApi({
            data,
            setLoading: () => {},
            submitCallApi: loginAction,
            successFunc: succFunc,
            errFunc: () => {},
            catchFunc: () => {},
        });
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
        <LinearGradient
            style={style.avatarContainer}
            colors={['#4c669f', '#3b5998', '#192f6a']}>
            <IonIcons
                name={'person-outline'}
                size={iconSizeL}
                color={onBackgroundDark}
                style={style.avatarStyle}
            />
        </LinearGradient>
    );

    const LoginCard = () => (
        <>
            <Surface style={[style.card]}>
                {AvatarIcon()}

                <GapV />

                <CustomTitle>{`Please Login to your Account`}</CustomTitle>

                <Form
                    onSubmit={handleSubmitLogin}
                    navToForgetPass={navToForgetPass}
                />
            </Surface>
        </>
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

    const Ellipses = () => (
        <>
            <View style={style.yellowCircle} />

            <View style={style.blueCircle} />
        </>
    );

    return (
        <View style={[style.container, gStyle.content]}>
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.linearGradient}></LinearGradient>
            {Ellipses()}
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
            elevation: 4,
            paddingTop: mgMs,
            borderRadius: bRss,
            marginHorizontal: mgM,
            paddingHorizontal: pdHm,
        },

        content: {
            flexGrow: 1,
        },

        image: {
            width: 144,
            height: 140,
            alignSelf: 'center',
        },

        subText: {
            color: onBackgroundDark,
        },

        title: {
            fontWeight: 'bold',
        },

        icon: { alignSelf: 'center' },

        avatarStyle: {},

        yellowCircle: {
            width: 200,
            height: 200,
            right: -100,
            position: 'absolute',
            borderRadius: 200 / 2,
            backgroundColor: colors.secondary,
            top: Dimensions.get('screen').height * 0.22,
        },

        blueCircle: {
            left: -75,
            width: 150,
            height: 150,
            position: 'absolute',
            borderRadius: 150 / 2,
            top: windowHeigth * 0.73,
            backgroundColor: colors.primary,
        },

        avatarContainer: {
            top: -30,
            padding: mgS,
            borderRadius: bRl,
            alignSelf: 'center',
            position: 'absolute',
            backgroundColor: 'blue',
        },

        signupButton: { alignSelf: 'center' },
    });
