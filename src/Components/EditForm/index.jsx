import {
  Avatar,
  Box,
  Toolbar,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import React from "react";
// import { Formik, Form, Field } from "formik";
import { useFormik } from "formik";
import { editProfileschema } from "../../schemas";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import styled from "./editForm.module.scss";
import classNames from "classnames";
import { formFields } from "./configForm.js";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "600px",
  width: "100%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  height: "600px",
  overflow: "hidden",
  padding: "0",
  borderRadius: "16px",
};

export default function EditForm() {
  const [image, setImage] = useState(
    "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
  );
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  const handleClickImage = () => {
    // Проксируем щелчок на изображении к input[type="file"]
    document.getElementById("fileInput").click();
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      bio: "",
      location: "",
    },
    validationSchema: editProfileschema,
    onSubmit: (values) => {
      values = { ...values, image };
      console.log(values);
    },
  });

  return (
    <Box sx={style}>
      <Box
        sx={{
          height: "600px",
          overflow: "auto",
          padding: "0",
        }}
      >
        <Toolbar
          disableGutters={true}
          className={classNames(styled.editFormHeader)}
          sx={{ position: "sticky" }}
        >
          <Typography
            variant="h5"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CloseOutlinedIcon sx={{ marginRight: "20px" }} /> Edit profile
          </Typography>

          <Button
            variant="contained"
            type="submit"
            onClick={formik.handleSubmit}
            size="small"
          >
            save
          </Button>
        </Toolbar>
        <Box
          sx={{
            maxWidth: "600px",
            width: "100%",
            height: "200px",
            position: "relative",
            backgroundColor: " red",
            boxSizing: "border-box",
          }}
        >
          <Box className={classNames(styled.iconAddFoto)}>
            <AddAPhotoIcon />
          </Box>
          <Avatar
            sx={{
              width: "100px",
              height: "100px",
              position: "absolute",
              bottom: "-50px",
              left: "30px",
            }}
            alt="Remy Sharp"
            src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
          />
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <img
            src={image}
            alt=""
            style={{ width: "100%", maxHeight: "200px" }}
            onClick={handleClickImage}
          />
        </Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ padding: "70px 15px 0" }}
          onSubmit={formik.handleSubmit}
        >
          {formFields.map((field) => (
            <div key={field.name}>
              <TextField
                name={field.name}
                id={`outlined-start-adornment`}
                label={field.label}
                multiline
                rows={field.rows}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onFocus={() => {
                  // Устанавливаем флаг фокуса в true при фокусе на поле
                  formik.setFieldTouched(field.name, true);
                }}
                className={styled.input}
                sx={{
                  width: "100%",
                  marginTop: "25px",

                  "& .MuiOutlinedInput-input": {
                    paddingTop: "5px ", // Увеличиваем верхний и нижний отступы внутри поля ввода
                  },
                }}
                error={
                  formik.touched[field.name] &&
                  Boolean(formik.errors[field.name])
                }
                helperText={
                  formik.touched[field.name] && formik.errors[field.name]
                }
                InputProps={{
                  sx: {
                    padding: "16px 10px",
                  },
                  endAdornment: formik.touched[field.name] ? (
                    <div
                      style={{
                        alignSelf: "flex-start",
                        fontSize: "14px",
                        position: "relative",
                        bottom: "15px",
                      }}
                    >
                      {(formik.values[field.name] || "").length}/
                      {field.maxLength}
                    </div>
                  ) : null, // Отображаем endAdornment только при фокусе
                }}
                InputLabelProps={{
                  shrink: false, // Отключение смещения метки при фокусе
                  sx: {
                    transform: formik.values[field.name]
                      ? "translate(10px, 4px)"
                      : null, // Смещаем метку вверх при фокусе, если поле не пустое
                    fontSize: formik.values[field.name] ? "14px" : "16px", // Устанавливаем размер шрифта в зависимости от состояния поля
                    transition: "transform 0.3s, font-size 0.3s", // Анимация при фокусе

                    "&.Mui-focused": {
                      transform: "translate(10px, 4px)", // Смещаем метку вверх при фокусе
                      fontSize: "14px",
                    },
                  },
                }}
              />
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
