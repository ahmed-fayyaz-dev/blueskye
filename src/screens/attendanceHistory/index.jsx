import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GetAttendanceHistoryAction } from './actions';
import List from './components/List';
import { callApi } from 'src/helpers/apiCall';

const AttendanceHistory = ({ navigation, GetAttendanceHistoryAction }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        handleGetFeesHistory();
    }, []);

    function handleGetFeesHistory() {
        callApi({
            data: {},
            setLoading: setLoading,
            submitCallApi: GetAttendanceHistoryAction,
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
            GetAttendanceHistoryAction,
        },
        dispatch,
        getState,
    );
}

export default connect(mapStateToProps, mapDipatchToProps)(AttendanceHistory);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
