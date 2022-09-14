import React, { useState, useEffect } from 'react';
// import i18n from "i18n-js";
import { View } from 'react-native';
// import { useTheme } from "react-native-paper";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CustomSnackbar } from 'src/components/customSnackbar';
import VirtualizedView from 'src/components/virtualizedBackedContainer';

import gloabalStyle from 'src/styles/index';

function Temp() {
    // const t = (v) => i18n.t(v); // Getting translated text
    // const { colors } = useTheme();
    const gStyle = gloabalStyle();
    // const style = styles(colors);

    return (
        <View style={gStyle.container}>
            <View style={gStyle.content}>{/* Content */}</View>
        </View>
    );
}

function mapStateToProps({ detailsBankBalReducer, loginUserReducer }) {
    return {
        detailsBankBalReducer,
        loginUserReducer,
    };
}

function mapDipatchToProps(dispatch, getState) {
    return bindActionCreators({}, dispatch, getState);
}

export default connect(mapStateToProps, mapDipatchToProps)(Temp);

// const styles = (colors) =>
//   StyleSheet.create({

//   });
