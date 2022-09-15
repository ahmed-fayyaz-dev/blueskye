import React, { useState } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { bRss } from 'src/styles';
import { ImageFullView } from './itemImageFullView';

export const BackgroundImage = ({
    uri,
    headers,
    imageStyle,
    children,
    ...props
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const showFullImage = () => setModalVisible(true);
    const hideFullImage = () => setModalVisible(false);

    return (
        <>
            <TouchableOpacity onPress={showFullImage}>
                <ImageBackground
                    style={[styles.imageBg, imageStyle]}
                    source={{
                        uri: uri,
                        headers: headers,
                    }}
                    resizeMode="cover"
                    // tintColor="rgba(0,0,0,0.1)"
                    {...props}>
                    {children}
                </ImageBackground>
            </TouchableOpacity>

            <ImageFullView
                uri={uri}
                visible={modalVisible}
                dismiss={hideFullImage}
            />
        </>
    );
};

const styles = StyleSheet.create({
    // image: {
    //     width: 80,
    //     height: 80,
    //     borderRadius: bRss,
    //     overflow: 'hidden',
    // },

    imageBg: {
        // width: "100%",
        height: 250,
        borderRadius: bRss,
        overflow: 'hidden',
    },
});
