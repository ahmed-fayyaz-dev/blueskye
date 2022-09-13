/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IonIcons } from 'src/helpers';
import { pdH, mgM, pdVm, primaryColor } from 'src/styles';
import { CustomRoundButton } from 'src/components/buttons';
import {
    CustomText,
    CustomTitle,
    CustomCaption,
    CustomSubheading,
} from 'src/components/customText';
import { handleBackToSignIn } from 'src/helpers/utils';

export class ErrorBoundary extends React.Component {
    state = {
        error: false,
        errorMsg: '',
    };

    static getDerivedStateFromError(error) {
        return { error: true };
    }

    componentDidCatch(error, errorInfo) {
        // deal with errorInfo if needed
        // console.error(error, errorInfo);
        this.setState({
            errorMsg: error,
        });
    }

    render() {
        // const { colors } = this.props.theme;

        if (this.state.error) {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <CustomText style={styles.iconView}>
                                <IonIcons
                                    name={'warning'}
                                    size={60}
                                    color={primaryColor}
                                />
                            </CustomText>

                            <CustomTitle>
                                Oops, Something Went Wrong
                            </CustomTitle>

                            <CustomSubheading style={styles.subtitle}>
                                {`The app ran into a problem and could not continue. We apologise for any inconvenience this has caused! Press the button below to restart the app and sign back in. Please contact us if this issue persists.`}
                            </CustomSubheading>

                            <CustomCaption style={styles.subtitle}>
                                {this.state.errorMsg}
                            </CustomCaption>

                            <CustomRoundButton
                                title={'Back to Sign In Screen'}
                                onPress={handleBackToSignIn}
                                color={primaryColor}
                                // theme={{ colors: { primary: primaryColor } }}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            );
        } else {
            return this.props.children;
        }
    }
}

// export default withTheme(ErrorBoundary);
export default ErrorBoundary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        flex: 1,
        paddingHorizontal: pdH,
        paddingTop: mgM,
    },

    subtitle: {
        marginVertical: pdVm,
    },

    iconView: {
        width: '100%',
    },
});
