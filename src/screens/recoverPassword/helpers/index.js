import * as yup from 'yup';

export const recoverPasswordSchema = yup.object().shape({
    accessCode: yup.string().required('Access Code is Required'),
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
