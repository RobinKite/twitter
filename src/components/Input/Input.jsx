import { TextField } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

export const Input = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <TextField
      {...field}
      {...props}
      variant="outlined"
      error={meta.error && meta.touched}
      helperText={meta.touched && meta.error}
    />
  );
};

Input.propTypes = {
  name: PropTypes.any,
};
