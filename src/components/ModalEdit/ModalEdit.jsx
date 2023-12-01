import {
  Toolbar,
  Typography,
  Button,
  TextField,
  styled,
  MenuItem,
  Box,
  Modal,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import { useFormik } from "formik";
import { UserPhoto } from "@/components";
import PropTypes from "prop-types";
import { formFields, configDateForm } from "./configForm.js";
import {
  getUsersUpdate,
  getUsersUpdateAvatarUrl,
  getUsersUpdateImageUrl,
} from "@/redux/slices/userSlice.js";
import { useDispatch } from "react-redux";

const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "600px",
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "24px",
  padding: "0",
  borderRadius: "16px",
  height: "600px",
  overflow: "hidden",
}));

const CustomButton = styled(Button)(() => ({
  backgroundColor: "black",
  borderRadius: "15px",
  color: "white",
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

// TODO: 👉 Rewrite the component
export function ModalEdit({ isOpen, onClose }) {
  const [imageUrl, setImageUrl] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [fileForServer, setFileForServer] = useState("");
  const [fileForServerAvatar, setFileForServerAvatar] = useState("");

  const dispatch = useDispatch();

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
      userTag: "",
    },
    //   "fullName": "string",
    // "userTag": "string",
    // "birthdate": "string",
    // "bio": "string",
    // "location": "string",
    // "avatarUrl": "string",
    // "imageUrl": "string"
    // validationSchema: editProfileSchema,
    onSubmit: (values) => {
      onClose();
      const { month, day, year } = values;
      const birthdateInSeconds = new Date(`${month} ${day}, ${year}`).getTime() / 1000;

      values = { ...values, fullName: values.name, birthdate: birthdateInSeconds };
      console.log();
      dispatch(getUsersUpdate(values));
      if (imageUrl) {
        dispatch(getUsersUpdateImageUrl(fileForServer));
      }
      if (avatarUrl) {
        dispatch(getUsersUpdateAvatarUrl(fileForServerAvatar));
      }
    },
  });

  return (
    <Modal open={isOpen} onClose={onClose}>
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
              Save
            </CustomButton>
          </ModalHeader>
          <UserPhoto
            changeIcon={true}
            imageUrl={imageUrl}
            avatarUrl={avatarUrl}
            setImageUrl={setImageUrl}
            setAvatarUrl={setAvatarUrl}
            setFileForServer={setFileForServer}
            setFileForServerAvatar={setFileForServerAvatar}
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
                      transform: formik.values[field.name]
                        ? "translate(10px, 4px)"
                        : null,
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
    </Modal>
  );
}

ModalEdit.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
