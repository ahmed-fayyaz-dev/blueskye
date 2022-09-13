import * as yup from "yup";

export const signupValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.number().required("Phone number is required"),
  email: yup.string().required("Email is required"),
  password: yup.string("Not String").required("Password is required"),
  confirmPassword: yup.string("Not String").required("Passwords don't match"),
});
