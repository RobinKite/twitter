import React from "react";
import { useField } from "formik";
import styles from "./input.module.scss";
import { TextField } from "@mui/material";

const Input = (props) => {
  const [fild, meta] = useField(props.name);
  const { error, touched } = meta;
  return (
    <>
      <div className={styles.orderForm}>
        <TextField
          {...fild}
          {...props}
          variant="outlined"
          error={meta.error && meta.touched}
          helperText={meta.touched && meta.error}
        />
      </div>
    </>
  );
};

export default Input;
