import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileContent from './components/profileContent';

const MyProfile = () => {
    return (
        <View style={styles.container}>
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
