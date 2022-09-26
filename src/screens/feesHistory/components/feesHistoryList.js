import React, { useMemo, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { genData } from '../dummyData';
import ListHeader from './listHeader';
import renderItem from './listItem';
import { GapV } from 'src/components/gap';
import VirtualizedView from 'src/components/virtualizedBackedContainer';
import { mgM, pdHs } from 'src/styles/index';

const ItemSeparator = () => <GapV />;
const keyExtractor = (item, index) => String(index + item);

const ListBox = ({ feesHistoryReducer, onRefresh }) => {
    const [refreshing] = useState(false);
    const { data } = feesHistoryReducer;
    let arrDate = data?.crmStudentLedger || [];

    const memoizedRenderItem = useMemo(() => renderItem, [feesHistoryReducer]);

    return (
        <VirtualizedView horizontal>
            <FlatList
                data={arrDate}
                refreshing={refreshing}
                onRefresh={onRefresh}
                renderItem={memoizedRenderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={ItemSeparator}
                // ListHeaderComponentStyle={{}}
                ListHeaderComponent={ListHeader}
                initialNumToRender={31}
                maxToRenderPerBatch={5}
                contentContainerStyle={styles.flatListContainer}
            />
        </VirtualizedView>
    );
};

function mapStateToProps({ feesHistoryReducer }) {
    return {
        feesHistoryReducer,
    };
}

export default connect(mapStateToProps, {})(ListBox);

const styles = StyleSheet.create({
    flatListContainer: { flexGrow: 1 },

    paddingTop: mgM,
    paddingHorizontal: pdHs,
});
