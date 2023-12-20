import { Form, Formik } from "formik";
import { Input } from "@/components";
import { loginFormSchema } from "@/schemas";
import { loginUser } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { NextButtonSX } from "@/components/LoginFormModal/styleSX";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "" };

  const onSubmit = (values) => {
    dispatch(loginUser(values.email, values.password));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginFormSchema}>
      <Form>
        <Input
          name="email"
          type="email"
          label="email"
          variant="email"
          sx={{ marginBottom: "12px" }}
        />
        <Input
          name="password"
          type="password"
          label="password"
          variant="password"
          sx={{ marginBottom: "12px" }}
        />
        <NextButtonSX type="submit">Next</NextButtonSX>
      </Form>
    </Formik>
  );
};
