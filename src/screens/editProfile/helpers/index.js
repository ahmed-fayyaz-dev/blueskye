import * as yup from 'yup';

export const editProfileValidationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    phone: yup
        .number()
        .integer('Must be digit only')
        .required('Phone number is required'),
    password: yup.string().required('Password is required'),
    newPassword: yup.string().required('Password is required'),
    confirmNewPassword: yup
        .string()
        .test(
            'confirmPasswordEqualsPassword',
            'Confirm Password does not match Password.',
            function (confirmNewPassword) {
                const { newPassword } = this.parent;
                if (confirmNewPassword !== newPassword) {
                    return false;
                }
                return true;
            },
        )
        .required('Confirm password is required'),
});
