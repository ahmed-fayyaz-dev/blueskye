import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useTheme } from 'react-native-paper';
import Toast from 'react-native-root-toast';

import { pdVm, title } from 'src/styles';
import { CustomRoundButton } from 'src/components/buttons';
import { CustomText } from 'src/components/customText';
import { GapV } from 'src/components/gap';

const CELL_COUNT = 4;

const RESEND_OTP_TIME_LIMIT = 90;

const OtpCodeField = ({ onSuccess }) => {
    const { colors } = useTheme();
    const style = styles(colors);
    let resendOtpTimerInterval;

    const [value, setValue] = useState('');
    const [otpNumber, setOtpNumber] = useState();
    const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
        RESEND_OTP_TIME_LIMIT,
    );
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        setOtpNumber('0000');
        startResendOtpTimer();

        return () => {
            if (resendOtpTimerInterval) {
                clearInterval(resendOtpTimerInterval);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resendButtonDisabledTime]);

    function showSnack(msg) {
        Toast.show(msg, Toast.durations.SHORT);
    }

    function handleSubmit() {
        if (value !== otpNumber) {
            showSnack('Enter correct OTP');
        } else {
            showSnack('Success');

            setTimeout(() => {
                onSuccess();
            }, 1000);
        }
    }

    const startResendOtpTimer = () => {
        //to start re-send otp option

        if (resendOtpTimerInterval) {
            clearInterval(resendOtpTimerInterval);
        }

        resendOtpTimerInterval = setInterval(() => {
            if (resendButtonDisabledTime <= 0) {
                clearInterval(resendOtpTimerInterval);
            } else {
                setResendButtonDisabledTime(resendButtonDisabledTime - 1);
            }
        }, 1000);
    };

    const onResendOtpButtonPress = () => {
        setValue('');
        setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
        startResendOtpTimer();

        // resend OTP Api call
        // todo
        setOtpNumber('0000');
        console.log('todo: Resend OTP');
    };

    return (
        <View>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={style.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <View
                        // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[style.cellRoot, isFocused && style.focusCell]}>
                        <Text style={style.cellText}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )}
            />
            <GapV large />

            {/* View for resend otp  */}
            {resendButtonDisabledTime > 0 ? (
                <CustomText>
                    {`Resend Authorisation Code in `}
                    <CustomText style={styles.highlight}>
                        {resendButtonDisabledTime}
                    </CustomText>
                    {` sec`}
                </CustomText>
            ) : (
                <CustomRoundButton
                    color={colors.secondary}
                    title={`Resend code`}
                    mode="text"
                    onPress={onResendOtpButtonPress}
                />
            )}

            <GapV />
            <CustomRoundButton title={'Verify'} onPress={handleSubmit} />
        </View>
    );
};

export default OtpCodeField;

const styles = colors =>
    StyleSheet.create({
        content: { padding: pdVm, minHeight: 300 },

        codeFieldRoot: {
            marginTop: pdVm,
            width: 280,
            alignSelf: 'center',
        },
        container: {
            flex: 1,
        },

        cellRoot: {
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: colors?.disabled,
            borderBottomWidth: 1,
        },

        cellText: {
            color: colors?.text,
            fontSize: title,
            textAlign: 'center',
        },

        focusCell: {
            borderBottomColor: colors?.notification,
            borderBottomWidth: 2,
        },

        highlight: {
            fontWeight: 'bold',
            color: colors?.primary,
        },

        contentColor: {
            color: colors.secondary,
        },
    });
