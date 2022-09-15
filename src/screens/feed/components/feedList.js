import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { mgM, pdHs } from 'src/styles';
import FeedItem from './feedItem';

const keyExtractorList = item => {
    return item.vid;
};

const List = ({ onRefresh, feedDataReducer }) => {
    const [refreshing] = useState(false);
    const { data } = feedDataReducer;
    let feedData = data?.crmStudentFeed || [];

    return (
        <FlatList
            refreshing={refreshing}
            onRefresh={onRefresh}
            data={feedData}
            keyExtractor={keyExtractorList}
            renderItem={FeedItem}
            contentContainerStyle={styles.content}
        />
    );
};

function mapStateToProps({ feedDataReducer }) {
    return {
        feedDataReducer,
    };
}

export default connect(mapStateToProps, {})(List);

const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        paddingHorizontal: pdHs,
        paddingTop: mgM,
    },
});
