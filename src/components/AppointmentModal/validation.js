import * as yup from "yup";

export const appointmentSchema = yup.object().shape({
  address: yup.string().required("Address is required"),
  phone: yup
    .string()
    .matches(
      /^\+380\d{9}$/,
      "Enter a valid Ukrainian phone number (+380XXXXXXXXX)"
    )
    .required("Phone number is required"),
  childAge: yup
    .number()
    .typeError("Enter a valid number")
    .positive("Age must be positive")
    .integer("Age must be a whole number")
    .required("Child's age is required"),
  meetingTime: yup.string().required("Please select meeting time"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  parentName: yup
    .string()
    .required("Parent’s name is required")
    .min(2, "Name must be at least 2 characters"),
  comment: yup
    .string()
    .required("Comment is required")
    .min(5, "Comment should be at least 5 characters"),
});
