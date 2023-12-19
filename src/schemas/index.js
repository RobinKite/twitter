import { object, string } from "yup";

export const loginFormSchema = object().shape({
  email: string().trim().required("Email is required").email("Email is not valid"),
  password: string().trim().min(4).max(20).required("Password is required"),
});

export const registrationFormSchema = object({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  userName: string().required("User name is required"),
  email: string().required("Email is required").email("Invalid email"),
  password: string().required("Password is required"),
  day: string(),
  month: string(),
  year: string(),
});

export const changePasswordSchema = object().shape({
  currentPassword: string().trim().required("Current password is required"),
  newPassword: string().trim().min(4).max(20).required("New password is required"),
  confirmPassword: string()
    .trim()
    .required("Confirm new password is required")
    .test("passwords-match", "Passwords do not match", function (value) {
      return value === this.parent.newPassword;
    }),
});
