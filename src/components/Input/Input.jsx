import { Stack, TextField } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

export const Input = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <Stack
      sx={{
        margin: 0,
        width: "100%",
        position: "relative",
      }}>
      <TextField
        {...field}
        {...props}
        variant="outlined"
        error={meta.error && meta.touched}
        helperText={meta.touched && meta.error}
      />
    </Stack>
  );
};

Input.propTypes = {
  name: PropTypes.any,
};
