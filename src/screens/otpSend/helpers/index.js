import * as yup from 'yup';

export const otpSendValidationSchema = yup.object().shape({
    phone: yup.number().required('Phone number is required'),
});
