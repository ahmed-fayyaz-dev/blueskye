import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';
import ListItem from './components/renderIList';
import { arr } from './dummyData';
import AppBar from 'src/components/appbar';
import { GapV } from 'src/components/gap';
import { mgM, pdHs } from 'src/styles/index';

const FeesHistory = ({ navigation }) => {
    const { colors } = useTheme();
    const style = styles(colors);
    const title = 'Fees History';

    const ItemSeparator = () => <GapV />;

    return (
        <View style={[style.container]}>
            <AppBar navigation={navigation} title={title} />

            <FlatList
                data={arr}
                keyExtractor={(item, index) => {
                    return index;
                }}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={ListItem}
                contentContainerStyle={style.content}
            />
            <GapV />
        </View>
    );
};

export default FeesHistory;

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
