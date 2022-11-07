import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileContent from './components/profileContent';
import Appbar from 'src/components/appbar';

const MyProfile = ({ route }) => {
    const title = route?.params?.title;
    const navigation = useNavigation();

    const Header = () =>
        Appbar({
            title,
            navigation,
        });

    return (
        <View style={styles.container}>
            {Header()}

            <ProfileContent />
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
