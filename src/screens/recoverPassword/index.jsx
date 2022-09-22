import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

import { bindActionCreators } from 'redux';
import { CustomSubheading, CustomTitle } from 'src/components/customText';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { GapV } from 'src/components/gap';
import { bRss, mgM, mgMs, pdHs, pdH } from 'src/styles/index';
import CustomInput from 'src/components/CustomInput';
import { CustomRoundButton } from 'src/components/buttons';

const RecoverPassword = ({ navigation }) => {
    const { colors } = useTheme();
    const style = styles(colors);

    // const navToRecoverPass = () => {};

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
            {/* form */}
            <CustomInput label="Email" />

            <GapV />

            <CustomRoundButton title={'SEND'} />
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

export default RecoverPassword;

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
