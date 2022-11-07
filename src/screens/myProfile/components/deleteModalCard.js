import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { bindActionCreators } from '@reduxjs/toolkit';
import { openURL } from 'expo-linking';
import { Surface } from 'react-native-paper';
import { connect } from 'react-redux';
import { deleteAccountAction } from '../actions';
import { windowWidth } from 'src/helpers';
import { pdHs, bRm } from 'src/styles';
import { secondaryColor } from 'src/styles';
import { CustomSquareButton } from 'src/components/buttons';
import { CustomTitle } from 'src/components/customText';
import { GapH } from 'src/components/gap';
import { callApi } from 'src/helpers/apiCall';
import { handleBackToSignIn } from 'src/helpers/utils';
import { showSnackLong } from 'src/helpers/utils';

const successDelFunc = res => {
    const { message, bE_CRMStudentDelete } = res;
    showSnackLong(message);

    setTimeout(() => {
        openURL(bE_CRMStudentDelete?.link);

        handleBackToSignIn();
    }, 2000);
};

const ModalCard = ({ onPressNo, deleteAccountAction }) => {
    const [loading, setLoading] = useState(false);

    function handleDeleteAccount() {
        callApi({
            data: {},
            setLoading: setLoading,
            submitCallApi: deleteAccountAction,
            successFunc: successDelFunc,
            errFunc: () => {},
            catchFunc: () => {},
        });
    }

    const onPressYes = () => {
        handleDeleteAccount();
    };

    return (
        <Surface style={styles.modalCard}>
            <CustomTitle>Are you sure you want to delete ?</CustomTitle>

            <View style={styles.buttonsView}>
                <CustomSquareButton
                    mode="text"
                    compact
                    loading={loading}
                    onPress={onPressYes}>
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

function mapStateToProps() {
    return {};
}
function mapDipatchToProps(dispatch, getState) {
    return bindActionCreators(
        {
            deleteAccountAction,
        },
        dispatch,
        getState,
    );
}

export default connect(mapStateToProps, mapDipatchToProps)(ModalCard);

const styles = StyleSheet.create({
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
