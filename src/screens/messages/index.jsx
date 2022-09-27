import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GetMessagesAction } from './actions';
import List from './components/messagesHistoryList';
import AppBar from 'src/components/appbar';
import { GapV } from 'src/components/gap';
import { mgM, pdHs } from 'src/styles/index';
import { callApi } from 'src/helpers/apiCall';

const Messages = ({ navigation, GetMessagesAction, ...params }) => {
    const title = params.route.name;
    const { colors } = useTheme();
    const style = styles(colors);

    const [loading, setLoading] = useState(false);
    const [refresh] = useState(false);

    useEffect(() => {
        handleGetFeesHistory();
    }, []);

    function handleGetFeesHistory() {
        callApi({
            data: {},
            setLoading: setLoading,
            submitCallApi: GetMessagesAction,
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
            <GapV />
        </View>
    );
};

function mapStateToProps({ messageReducer }) {
    return { messageReducer };
}
function mapDipatchToProps(dispatch, getState) {
    return bindActionCreators(
        {
            GetMessagesAction,
        },
        dispatch,
        getState,
    );
}

export default connect(mapStateToProps, mapDipatchToProps)(Messages);

const styles = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
        },

        content: {
            flexGrow: 1,
            paddingTop: mgM,
            paddingHorizontal: pdHs,
        },
    });
