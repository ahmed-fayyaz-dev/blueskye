import React from 'react';
import { Formik } from 'formik';

import { otpSendValidationSchema } from '../helpers';
import CustomInput from 'src/components/CustomInput';
import { CustomRoundButton } from 'src/components/buttons';
import { GapV } from 'src/components/gap';

export const Form = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ phone: '' }}
            onSubmit={values => {
                onSubmit(values);
            }}
            validationSchema={otpSendValidationSchema}>
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
                            keyboardType={'phone-pad'}
                            fieldName="phone"
                            onChange={handleChange('phone')}
                            label="Enter mobile number"
                            state={values.phone}
                            onBlur={handleBlur('phone')}
                            helper={touched.phone ? errors.phone : null}
                        />

                        <GapV />

                        <CustomRoundButton title={'SEND'} />

                        <GapV />
                    </>
                );
            }}
        </Formik>
    );
};
