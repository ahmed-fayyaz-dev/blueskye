import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Surface } from 'react-native-paper';
import { windowHeigth, windowWidth } from 'src/helpers';
import { pdHs, mgM, bRm } from 'src/styles';
import { secondaryColor } from 'src/styles';
import Appbar from 'src/components/appbar';
import { CustomRoundButton, CustomSquareButton } from 'src/components/buttons';
import { CustomTitle } from 'src/components/customText';
import { GapH, GapV } from 'src/components/gap';
import { ModalView } from 'src/components/modalView';

const ModalCard = ({ onPressYes, onPressNo }) => {
    return (
        <Surface style={styles.modalCard}>
            <CustomTitle>Are you sure you want to delete ?</CustomTitle>

            <View style={styles.buttonsView}>
                <CustomSquareButton mode="text" compact>
                    YES
                </CustomSquareButton>

                <GapH />

                <CustomSquareButton
                    onPress={onPressNo}
                    mode="text"
                    compact
                    color={secondaryColor}>
                    NO
                </CustomSquareButton>
            </View>
        </Surface>
    );
};

const Modal = ({ visible, onDismiss }) => {
    return (
        <ModalView visible={visible} onDismiss={onDismiss}>
            <ModalCard onPressNo={onDismiss} />
        </ModalView>
    );
};

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

    modalCard: {
        padding: pdHs,
        width: windowWidth * 0.85,
        borderRadius: bRm,
        justifyContent: 'space-around',
    },

    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
