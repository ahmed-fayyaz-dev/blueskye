import * as yup from 'yup';

export const signupValidationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    phone: yup
        .number()
        .integer('Must be digit only')
        .required('Phone number is required'),
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Email is Required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup
        .string()
        .test(
            'confirmPasswordEqualsPassword',
            'Confirm Password does not matches Password.',
            function (confirmPassword) {
                const { password } = this.parent;
                if (confirmPassword !== password) {
                    return false;
                }
                return true;
            },
        )
        .required('Confirm password is required'),
});
