import {
  Toolbar,
  Typography,
  Button,
  TextField,
  styled,
  MenuItem,
  Box,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import { useFormik } from "formik";
import { UserPhoto } from "@/components";
import { editProfileSchema } from "@/schemas";
import PropTypes from "prop-types";
import { formFields, configDateForm } from "./configForm.js";

const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "600px",
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  border: "1px solid #000",
  boxShadow: "24px",
  padding: "0",
  borderRadius: "16px",
  height: "600px",
  overflow: "hidden",
}));

const CustomButton = styled(Button)(() => ({
  backgroundColor: "black",
  borderRadius: "15px",
  "&:hover": {
    backgroundColor: "black",
  },
}));

const ContainerDate = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "20px",
}));

const ModalContent = styled(Box)(() => ({
  height: "600px",
  overflow: "auto",
  padding: " 0",
}));

const ModalHeader = styled(Toolbar)(() => ({
  backgroundColor: "rgb(255, 255, 255)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  justifyContent: "space-between",
  padding: "0 15px",
}));

export function ModalEdit({ onClose }) {
  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const getDaysInMonth = (month) => {
    if (month === "February") {
      return Array.from({ length: 28 }, (_, i) => i + 1);
    }
    if (["April", "June", "September", "November"].includes(month)) {
      return Array.from({ length: 30 }, (_, i) => i + 1);
    }
    return Array.from({ length: 31 }, (_, i) => i + 1);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      bio: "",
      location: "",
      month: "",
      day: "",
      year: "",
    },
    validationSchema: editProfileSchema,
    onSubmit: (values) => {
      onClose();
      values = { ...values, avatar, image };
      console.log(values);
    },
  });

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader disableGutters={true}>
          <Typography variant="h5" sx={{ display: "flex", alignItems: "center" }}>
            <CloseOutlinedIcon sx={{ marginRight: "20px" }} onClick={onClose} /> Edit
            profile
          </Typography>

          <CustomButton
            variant="contained"
            type="submit"
            onClick={formik.handleSubmit}
            size="small">
            save
          </CustomButton>
        </ModalHeader>
        <UserPhoto
          changeIcon={true}
          image={image}
          avatar={avatar}
          setImage={setImage}
          setAvatar={setAvatar}
        />
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ padding: "70px 15px" }}
          onSubmit={formik.handleSubmit}>
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
                  formik.setFieldTouched(field.name, true);
                }}
                sx={{
                  width: "100%",
                  marginTop: "25px",
                  "& .MuiOutlinedInput-input": {
                    paddingTop: "5px",
                  },
                }}
                error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                helperText={formik.touched[field.name] && formik.errors[field.name]}
                InputProps={{
                  sx: {
                    padding: "16px 10px",
                  },
                  endAdornment:
                    formik.touched[field.name] && field.maxLength ? (
                      <div
                        style={{
                          alignSelf: "flex-start",
                          fontSize: "14px",
                          position: "relative",
                          bottom: "15px",
                        }}>
                        {(formik.values[field.name] || "").length}/{field.maxLength}
                      </div>
                    ) : null,
                }}
                InputLabelProps={{
                  shrink: false,
                  sx: {
                    transform: formik.values[field.name] ? "translate(10px, 4px)" : null,
                    fontSize: formik.values[field.name] ? "14px" : "16px",
                    transition: "transform 0.3s, font-size 0.3s",
                    "&.Mui-focused": {
                      transform: "translate(10px, 4px)",
                      fontSize: "14px",
                    },
                  },
                }}
              />
            </div>
          ))}
          <ContainerDate>
            {configDateForm.map((field) => (
              <TextField
                sx={{ width: "150px" }}
                key={field.name}
                name={field.name}
                id={`outlined-start-adornment`}
                label={field.label}
                select
                value={formik.values[field.name]}
                onChange={(event) => {
                  const value = event.target.value;
                  if (field.name === "month") {
                    setSelectedMonth(value);
                    formik.setFieldValue(field.name, value);
                    formik.setFieldValue("day", "");
                  } else {
                    formik.setFieldValue(field.name, value);
                  }
                }}>
                {field.name === "day"
                  ? getDaysInMonth(selectedMonth).map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))
                  : field.options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
              </TextField>
            ))}
          </ContainerDate>
        </Box>
      </ModalContent>
    </ModalContainer>
  );
}

ModalEdit.propTypes = {
  onClose: PropTypes.func.isRequired,
};
