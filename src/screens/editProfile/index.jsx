import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
import AppBar from 'src/components/appbar';
// import Animated from 'react-native-reanimated';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

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
    mgS,
    onBackgroundDark,
    pdHm,
    pdHs,
} from 'src/styles/index';
const EditProfile = ({ navigation }) => {
    const { colors } = useTheme();
    const style = styles(colors);
    const gStyle = globalStyles();
    const title = 'Edit Profile';
    const goBack = () => {
        navigation.goBack();
    };

    const TopView = () => (
        <>
            <GapV large />

            <Image
                resizeMode="contain"
                source={icons.app.logoLargeW}
                style={style.image}
            />
        </>
    );

    const EditProfileCard = () => (
        <View style={[style.card]}>
            <Form />
        </View>
    );

    return (
        <View style={[style.container]}>
            <AppBar navigation={navigation} title={title} back />
            <ScrollView contentContainerStyle={[style.content]}>
                {TopView()}
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
    });
