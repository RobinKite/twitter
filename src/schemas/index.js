import { object, string } from "yup";

export const forgotPasswordSchema = object().shape({
  inputValue: string()
    .required("This field is required")
    .test(
      "phone-or-username-or-email",
      "Enter a valid phone number, username, or email",
      (value) => {
        const phoneRegex = /^\+\d{1,3}[- ]?\d{6,}$/;
        const usernameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

        // Test if the value matches any of the allowed formats
        return (
          phoneRegex.test(value) || usernameRegex.test(value) || emailRegex.test(value)
        );
      },
    ),
});

export const loginFormSchema = object().shape({
  email: string().trim().required("Email is required").email("Email is not valid"),
  password: string().trim().min(4).max(20).required("Password is required"),
});

export const passwordFormSchema = object().shape({
  inputValue: string()
    .required("This field is required")
    .test("phone-or-username", "Enter phone number or name", (value) => {
      const phoneRegex = /^\+\d{1,3}[- ]?\d{6,}$/;
      const usernameRegex = /^[a-zA-Z\s]+$/;
      return phoneRegex.test(value) || usernameRegex.test(value);
    }),
});

export const passwordFormSchema2 = object({
  password: string().required("Required"),
});

export const validationSchema = object({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  userName: string().required("User name is required"),
  email: string().required("Email is required").email("Invalid email"),
  password: string().required("Password is required"),
  day: string(),
  month: string(),
  year: string(),
});
