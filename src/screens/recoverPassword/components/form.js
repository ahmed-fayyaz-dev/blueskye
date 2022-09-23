import React from 'react';
import { Formik } from 'formik';

import { recoverPasswordSchema } from '../helpers';
import CustomInput from 'src/components/CustomInput';
import { CustomRoundButton } from 'src/components/buttons';
import { GapV } from 'src/components/gap';

export const Form = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{
                accessCode: '',
                password: '',
                confirmPassword: '',
            }}
            onSubmit={values => {
                onSubmit(values);
            }}
            validationSchema={recoverPasswordSchema}>
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
                            fieldName="accessCode"
                            onChange={handleChange('accessCode')}
                            label="Access Code"
                            state={values.accessCode}
                            onBlur={handleBlur('accessCode')}
                            helper={
                                touched.accessCode ? errors.accessCode : null
                            }
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
                        <GapV />

                        <CustomInput
                            secure
                            fieldName="confirmPassword"
                            onChange={handleChange('confirmPassword')}
                            label="Confirm Password"
                            state={values.confirmPassword}
                            onBlur={handleBlur('confirmPassword')}
                            helper={
                                touched.confirmPassword
                                    ? errors.confirmPassword
                                    : null
                            }
                        />
                        <GapV />

                        <CustomRoundButton
                            title="Update"
                            onPress={handleSubmit}
                        />

                        <GapV large />
                    </>
                );
            }}
        </Formik>
    );
};
