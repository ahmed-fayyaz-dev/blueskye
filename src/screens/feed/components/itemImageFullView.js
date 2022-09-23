import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import { iconSizeL, onBackgroundDark } from 'src/styles';
import { CustomIconButton } from 'src/components/buttons';

const ANIMATION_TYPE = 'slide';
const SWIPE_DOWN_THRESHOLD = 80;

const customIndicator = () => null;

export const ImageFullView = ({ uri, visible, dismiss }) => {
    const images = [
        {
            url: uri,
            props: {
                // headers: ...
            },
        },
    ];

    const RenderHeader = () => (
        <View style={styles.headerView}>
            <CustomIconButton
                onPress={dismiss}
                name={'close-circle-outline'}
                color={onBackgroundDark}
                size={iconSizeL}
            />
        </View>
    );

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType={ANIMATION_TYPE}
            onTouchCancel={dismiss}>
            <ImageViewer
                imageUrls={images}
                onClick={dismiss}
                onCancel={dismiss}
                backgroundColor="rgba(0,0,0,0.8)"
                enableSwipeDown={true}
                renderHeader={RenderHeader}
                saveToLocalByLongPress={false}
                renderIndicator={customIndicator}
                swipeDownThreshold={SWIPE_DOWN_THRESHOLD}
                style={styles.imageViewStyle}
            />
        </Modal>
    );
};

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row-reverse',
    },
});
