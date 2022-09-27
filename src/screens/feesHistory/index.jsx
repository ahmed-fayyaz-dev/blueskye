import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GetFeesHistoryAction } from './actions';
import List from './components/feesHistoryList';
import AppBar from 'src/components/appbar';
import { callApi } from 'src/helpers/apiCall';

const FeesHistory = ({ navigation, GetFeesHistoryAction, ...params }) => {
    const title = params.route.name;

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        handleGetFeesHistory();
    }, []);

    function handleGetFeesHistory() {
        callApi({
            data: {},
            setLoading: setLoading,
            submitCallApi: GetFeesHistoryAction,
            successFunc: () => {},
            errFunc: () => {},
            catchFunc: () => {},
        });
    }

    const refreshHandler = async () => {
        try {
            handleGetFeesHistory();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <View style={[styles.container]}>
            <AppBar navigation={navigation} title={title} />

            <List onRefresh={refreshHandler} />
        </View>
    );
};

function mapStateToProps() {
    return {};
}
function mapDipatchToProps(dispatch, getState) {
    return bindActionCreators(
        {
            GetFeesHistoryAction,
        },
        dispatch,
        getState,
    );
}

export default connect(mapStateToProps, mapDipatchToProps)(FeesHistory);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
