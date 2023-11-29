import { TextField } from "@mui/material";
import { useField } from "formik";
import styles from "./Input.module.scss";

export const Input = (props) => {
  const [fild, meta] = useField(props.name);
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
