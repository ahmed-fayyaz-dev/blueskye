import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required("Email/Id is required"),
  password: yup.string().required("Password is required"),
  remember: yup.boolean().optional(),
});
