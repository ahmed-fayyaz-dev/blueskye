import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Portal } from 'react-native-paper';
import { windowWidth } from 'src/helpers';
import { pdHs, mgM, bRm } from 'src/styles';
import { secondaryColor } from 'src/styles';
import DelModalCard from './deleteModalCard';
import Appbar from 'src/components/appbar';
import { CustomRoundButton } from 'src/components/buttons';
import { CustomTitle } from 'src/components/customText';
import { GapV } from 'src/components/gap';
import { ModalView } from 'src/components/modalView';

const Content = ({ onPressDel }) => {
    return (
        <View style={styles.content}>
            <MaterialCommunityIcons
                name="account-remove"
                size={100}
                color={secondaryColor}
                resizeMode="contain"
                style={styles.icon}
            />

            <GapV />

            <CustomTitle style={styles.deleteText}>
                {`Account deletion is an irreversible process`}
            </CustomTitle>

            <GapV />

            <CustomRoundButton title={'Delete Account'} onPress={onPressDel} />
        </View>
    );
};

const Modal = ({ visible, onDismiss }) => {
    return (
        <Portal>
            <ModalView visible={visible} onDismiss={onDismiss}>
                <DelModalCard onPressNo={onDismiss} />
            </ModalView>
        </Portal>
    );
};

const DeleteAccount = ({ route }) => {
    const title = route?.params?.title;
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const hideModal = () => setModalVisible(false);
    const showModal = () => setModalVisible(true);

    const Header = () =>
        Appbar({
            title,
            navigation,
            back: true,
        });

    return (
        <View style={styles.container}>
            {Header()}

            <GapV />

            {Content({ onPressDel: showModal })}

            {Modal({ visible: modalVisible, onDismiss: hideModal })}
        </View>
    );
};

export default DeleteAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        flex: 1,
        paddingHorizontal: pdHs,
        paddingTop: mgM,
    },

    icon: {
        alignSelf: 'center',
    },

    deleteText: {
        fontWeight: 'bold',
    },
});
