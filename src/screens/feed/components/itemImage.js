import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { bRss } from 'src/styles';

export const BackgroundImage = ({
    uri,
    headers,
    imageStyle,
    children,
    ...props
}) => (
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
);

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        borderRadius: bRss,
        overflow: 'hidden',
    },

    imageBg: {
        // width: "100%",
        height: 250,
        borderRadius: bRss,
        overflow: 'hidden',
    },
});
