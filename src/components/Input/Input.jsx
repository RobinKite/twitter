import { TextField } from "@mui/material";
import { useField } from "formik";
import styles from "./Input.module.scss";
import PropTypes from "prop-types";

export const Input = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div className={styles.orderForm}>
      <TextField
        {...field}
        {...props}
        variant="outlined"
        error={meta.error && meta.touched}
        helperText={meta.touched && meta.error}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.any,
};
