import * as yup from "yup";

export const ContactSchema = yup.object({
  name: yup.string().min(3).required("Please Enter Your Name."),
  email: yup
    .string()
    .email("Please Enter Your Email.")
    .required("Please Enter Your Email."),
  query: yup.string().required("Please Enter Your Query."),
});
