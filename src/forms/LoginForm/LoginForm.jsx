import { Form, Formik } from "formik";
import { Input } from "@/components";
import { loginFormSchema } from "@/schemas";

export const LoginForm = () => {
  const initialValues = {
    email: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginFormSchema}>
      <Form>
        <Input name="email" type="email" label="email@" variant="email@" />
      </Form>
    </Formik>
  );
};
