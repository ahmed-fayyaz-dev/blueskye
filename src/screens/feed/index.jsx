import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GetFeedDataAction } from './actions/actions';
import FeedList from './components/feedList';
import { callApi } from 'src/helpers/apiCall';
import gloabalStyle from 'src/styles/index';

function Feed({
    navigation,
    GetFeedDataAction,
    //
}) {
    const { colors } = useTheme();
    const gStyle = gloabalStyle();
    const style = styles(colors);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        handleGetFeedData();
    }, []);

    function handleGetFeedData() {
        callApi({
            data: {},
            setLoading: setLoading,
            submitCallApi: GetFeedDataAction,
            successFunc: () => {},
            errFunc: () => {},
            catchFunc: () => {},
        });
    }

    const refreshHandler = async () => {
        try {
            handleGetFeedData();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <View style={[gStyle.container]}>
            {/* {loading ? <LoadingView /> : null} */}

            <FeedList onRefresh={refreshHandler} />
        </View>
    );
}

function mapStateToProps() {
    return {};
}
function mapDipatchToProps(dispatch, getState) {
    return bindActionCreators(
        {
            GetFeedDataAction,
        },
        dispatch,
        getState,
    );
}

export default connect(mapStateToProps, mapDipatchToProps)(Feed);

const styles = colors => StyleSheet.create({});
