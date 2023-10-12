import * as Yup from "yup";

export const editProfileschema = Yup.object({
  name: Yup.string()
    .min(1, "Minimum 1 letters")
    .max(20, "Maximum 20 letters")
    .required("This field is required"),
});
