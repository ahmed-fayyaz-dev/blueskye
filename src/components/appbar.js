import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import {
    backIcon,
    searchIcon,
    moreIcon,
    drawerIconName,
    iconSize,
} from 'src/styles/navCss';

const AppHeader = ({
    navigation,
    title,
    subtitle,
    handleMore,
    handleSearch,
    back,
}) => {
    const theme = useTheme();

    const openDrawer = () => navigation.openDrawer();

    const _goBack = () => {
        navigation.pop();
    };

    const _handleSearch = () => handleSearch();

    const _handleMore = () => handleMore();

    return (
        <Appbar.Header theme={theme}>
            <Appbar.Action
                icon={back ? backIcon : drawerIconName}
                size={iconSize}
                onPress={back ? _goBack : openDrawer}
            />

            <Appbar.Content
                title={title}
                subtitle={subtitle ? subtitle : null}
            />

            {handleSearch && (
                <Appbar.Action icon={searchIcon} onPress={_handleSearch} />
            )}

            {handleMore && (
                <Appbar.Action icon={moreIcon} onPress={_handleMore} />
            )}
        </Appbar.Header>
    );
};

export default AppHeader;
