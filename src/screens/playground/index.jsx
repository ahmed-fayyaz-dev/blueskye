import React, { useState } from 'react';
import { Button, View } from 'react-native';

export const Playground = () => {
    // eslint-disable-next-line no-unused-vars
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    // eslint-disable-next-line no-unused-vars
    const handleConfirm = date => {
        console.warn('A date has been picked: ', date);
        hideDatePicker();
    };

    return (
        <View>
            <Button title="PRESS ME" onPress={showDatePicker} />
        </View>
    );
};
