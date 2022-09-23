import * as yup from 'yup';

export const forgetPasswordSchema = yup.object().shape({
    email: yup
        .string()
        .email('Enter Correct email address')
        .required('Access Code is Required'),
});
