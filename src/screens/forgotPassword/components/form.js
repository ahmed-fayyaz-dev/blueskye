import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';

import { forgetPasswordSchema } from '../helpers/index';
import CustomInput from 'src/components/CustomInput';
import { CustomRoundButton } from 'src/components/buttons';
import { GapV } from 'src/components/gap';

export const Form = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ email: '' }}
            onSubmit={values => {
                onSubmit(values);
            }}
            validationSchema={forgetPasswordSchema}>
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
            }) => {
                return (
                    <>
                        <CustomInput
                            fieldName="email"
                            onChange={handleChange('email')}
                            label="Email"
                            state={values.email}
                            onBlur={handleBlur('email')}
                            helper={touched.email ? errors.email : null}
                        />
                        <GapV small />

                        <CustomRoundButton
                            title="Send"
                            onPress={handleSubmit}
                        />
                    </>
                );
            }}
        </Formik>
    );
};

// eslint-disable-next-line no-unused-vars
const styles = colors => StyleSheet.create({});
