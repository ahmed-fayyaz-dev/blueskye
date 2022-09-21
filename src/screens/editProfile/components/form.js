import React from 'react';
import { Formik } from 'formik';

import { editProfileValidationSchema } from '../helpers';
import CustomInput from 'src/components/CustomInput';
import { CustomRoundButton } from 'src/components/buttons';
import { GapV } from 'src/components/gap';

export const Form = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{
                name: '',
                phone: '',
                password: '',
                newPassword: '',
                confirmNewPassword: '',
            }}
            onSubmit={values => {
                onSubmit(values);
            }}
            validationSchema={editProfileValidationSchema}>
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
                            fieldName="newPassword"
                            onChange={handleChange('newPassword')}
                            label="New Password"
                            state={values.newPassword}
                            onBlur={handleBlur('newPassword')}
                            helper={
                                touched.newPassword ? errors.newPassword : null
                            }
                        />

                        <GapV small />

                        <CustomInput
                            secure
                            fieldName="confirmNewPassword"
                            onChange={handleChange('confirmNewPassword')}
                            label="Confirm New Password"
                            state={values.confirmNewPassword}
                            onBlur={handleBlur('confirmNewPassword')}
                            helper={
                                touched.confirmNewPassword
                                    ? errors.confirmNewPassword
                                    : null
                            }
                        />

                        <GapV />

                        <CustomRoundButton
                            title="Update Profile"
                            onPress={handleSubmit}
                        />

                        <GapV />
                    </>
                );
            }}
        </Formik>
    );
};
