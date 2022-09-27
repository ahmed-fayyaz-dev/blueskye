import React from 'react';
import { ScrollView, View, StyleSheet, Image, Dimensions } from 'react-native';
import { useTheme, Surface } from 'react-native-paper';
import AppBar from 'src/components/appbar';
import { windowHeigth } from 'src/helpers';
import { icons } from 'assets/images';
// import { setStorageItem } from 'src/helpers';
// import { signupAction } from './actions';
import { Form } from './components/form';
import { GapV } from 'src/components/gap';
// import { entering, exiting } from 'src/helpers/animation';
// import { callApi } from 'src/helpers/apiCall';
// import { ONBOARD, ID, PASSWORD } from 'src/helpers/constants';
import globalStyles, {
    bRl,
    bRss,
    mgM,
    mgMs,
    pdHm,
    pdHs,
} from 'src/styles/index';
const EditProfile = ({ navigation, ...params }) => {
    const { colors } = useTheme();
    const style = styles(colors);
    const gStyle = globalStyles();
    const title = params.route.name;
    const goBack = () => {
        navigation.goBack();
    };

    const EditProfileCard = () => (
        <Surface style={[style.card]}>
            <Form />
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
            <AppBar navigation={navigation} title={title} back />
            {Ellipses()}
            <ScrollView contentContainerStyle={[style.content]}>
                <GapV large />

                <GapV large />
                {EditProfileCard()}
                <GapV />
            </ScrollView>
        </View>
    );
};

export default EditProfile;

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
            width: 144,
            height: 140,
            alignSelf: 'center',
        },

        yellowCircle: {
            width: 200,
            height: 200,
            right: -100,
            position: 'absolute',
            borderRadius: 200 / 2,
            backgroundColor: colors.secondary,
            top: Dimensions.get('screen').height * 0.16,
        },

        blueCircle: {
            left: -75,
            width: 150,
            height: 150,
            position: 'absolute',
            borderRadius: 150 / 2,
            top: windowHeigth * 0.75,
            backgroundColor: colors.primary,
        },
    });
