import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';

import { signupValidationSchema } from '../helpers';
import CustomInput from 'src/components/CustomInput';
import { CustomRoundButton } from 'src/components/buttons';
import { CustomText } from 'src/components/customText';
import { GapV } from 'src/components/gap';

export const Form = ({ onSubmit }) => {
    const { colors } = useTheme();
    const style = styles(colors);

    return (
        <Formik
            initialValues={{
                name: '',
                phone: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            onSubmit={values => {
                onSubmit(values);
            }}
            validationSchema={signupValidationSchema}>
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
            }) => {
                // const handleChangeRemember = () =>
                //   setFieldValue("remember", !values.remember);

                return (
                    <>
                        <CustomInput
                            fieldName="name"
                            onChange={handleChange('name')}
                            label="Full Name"
                            state={values.name}
                            onBlur={handleBlur('name')}
                            helper={touched.name ? errors.name : null}
                        />
                        <GapV small />

                        <CustomInput
                            keyboardType="phone-pad"
                            fieldName="phone"
                            onChange={handleChange('phone')}
                            label="Phone No."
                            state={values.phone}
                            onBlur={handleBlur('phone')}
                            helper={touched.phone ? errors.phone : null}
                        />

                        <GapV small />

                        <CustomInput
                            fieldName="email"
                            onChange={handleChange('email')}
                            label="Email"
                            state={values.email}
                            onBlur={handleBlur('email')}
                            helper={touched.email ? errors.email : null}
                        />

                        <GapV small />

                        <CustomInput
                            secure
                            fieldName="password"
                            onChange={handleChange('password')}
                            label="Password"
                            state={values.password}
                            onBlur={handleBlur('password')}
                            helper={touched.password ? errors.password : null}
                        />

                        <GapV small />

                        <CustomInput
                            secure
                            fieldName="confirmPassword"
                            onChange={handleChange('confirmPassword')}
                            label="Confirm Password"
                            state={values.password}
                            onBlur={handleBlur('confirmPassword')}
                            helper={
                                touched.confirmPassword
                                    ? errors.confirmPassword
                                    : null
                            }
                        />

                        <GapV />

                        <CustomRoundButton
                            title="SIGN UP"
                            onPress={handleSubmit}
                        />

                        <GapV />

                        <CustomText>
                            {`By Signing up you accept our `}

                            <TouchableOpacity>
                                <CustomText style={[style.content]}>
                                    {`Terms of Services`}{' '}
                                </CustomText>
                            </TouchableOpacity>

                            {` and `}

                            <TouchableOpacity>
                                <CustomText
                                    style={
                                        style.content
                                    }>{`Privacy Policy.`}</CustomText>
                            </TouchableOpacity>
                        </CustomText>

                        <GapV />
                    </>
                );
            }}
        </Formik>
    );
};

// eslint-disable-next-line no-unused-vars
const styles = colors =>
    StyleSheet.create({
        fdr: { flexDirection: 'row' },

        bottomRow: { flexDirection: 'row', justifyContent: 'space-between' },

        revBottomContainer: {
            flexDirection: 'column-reverse',
            flex: 1,
        },

        forgotPassText: {
            textDecorationLine: 'underline',
        },

        content: {
            color: colors.secondary,
        },
    });
