import React, { useMemo, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import ListHeader from './listHeader';
import { GapV } from 'src/components/gap';
import VirtualizedView from 'src/components/virtualizedBackedContainer';
import { mgM, pdHs } from 'src/styles/index';

const ItemSeparator = () => <GapV />;
const keyExtractor = (item, index) => String(index + item);

const ListBox = ({ attendanceHistoryReducer, onRefresh }) => {
    const [refreshing] = useState(false);
    const { data } = attendanceHistoryReducer;
    let arrDate = data?.crmStudentAttendanceHistory || [];

    const memoizedRenderItem = useMemo(
        () => ListItem,
        [attendanceHistoryReducer],
    );

    return (
        <VirtualizedView horizontal>
            <FlatList
                data={arrDate}
                refreshing={refreshing}
                onRefresh={onRefresh}
                renderItem={memoizedRenderItem}
                keyExtractor={keyExtractor}
                ListHeaderComponent={ListHeader}
                ItemSeparatorComponent={ItemSeparator}
                initialNumToRender={10}
                maxToRenderPerBatch={7}
                contentContainerStyle={styles.flatListContainer}
            />
        </VirtualizedView>
    );
};

function mapStateToProps({ attendanceHistoryReducer }) {
    return {
        attendanceHistoryReducer,
    };
}

export default connect(mapStateToProps, {})(ListBox);

const styles = StyleSheet.create({
    flatListContainer: {
        flexGrow: 1,
    },
});
