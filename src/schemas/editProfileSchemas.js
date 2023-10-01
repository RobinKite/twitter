import * as Yup from "yup";

export const editProfileschema = Yup.object({
  name: Yup.string()
    .min(1, "Minimum 1 letters")
    .max(20, "Maximum 20 letters")
    .required("This field is required"),

  bio: Yup.string()
    .min(2, "Minimum 2 letters")
    .max(20, "Maximum 20 letters")
    .matches(/^([A-Za-zа-яА-Я])+$/, "Only letters"),
  location: Yup.number()
    .min(18, "Minimum 18 years old")
    .max(99, "Maximum 99 years old"),
});
