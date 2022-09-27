import React, { useMemo, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';
import { connect } from 'react-redux';

import renderItem from './renderItem';
import AppBar from 'src/components/appbar';
import { GapV } from 'src/components/gap';
import { mgM, pdHs } from 'src/styles/index';

const keyExtractor = (item, index) => String(index + item);
const ItemSeparator = () => <GapV />;

const List = ({ messageReducer, onRefresh }) => {
    const [refreshing] = useState(false);
    const { colors } = useTheme();
    const style = styles(colors);
    const memoizedRenderItem = useMemo(() => renderItem, [messageReducer]);
    const { data } = messageReducer;
    let arrData = data?.crmStudentMessages || [];
    return (
        <>
            <FlatList
                data={arrData}
                keyExtractor={keyExtractor}
                refreshing={refreshing}
                onRefresh={onRefresh}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={memoizedRenderItem}
                contentContainerStyle={style.content}
            />
        </>
    );
};

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

function mapStateToProps({ messageReducer }) {
    return {
        messageReducer,
    };
}

export default connect(mapStateToProps, {})(List);
