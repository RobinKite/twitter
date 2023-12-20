import { Typography, TextField, MenuItem, Box, Modal } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { UserPhoto } from "@/components";
import PropTypes from "prop-types";
import { formFields, configDateForm } from "./configForm.js";
import {
  getUsersUpdate,
  getUsersUpdateAvatarUrl,
  getUsersUpdateImageUrl,
} from "@/redux/slices/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import {
  ContainerDate,
  CustomButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
} from "./styledSX.jsx";
import { formatBirthdate, getDaysInMonth } from "@/utils/date.js";

// TODO: 👉 Rewrite the component
export function ModalEdit({ isOpen, onClose }) {
  const [imageUrl, setImageUrl] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [fileForServer, setFileForServer] = useState("");
  const [fileForServerAvatar, setFileForServerAvatar] = useState("");
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      bio: "",
      location: "",
      month: "",
      day: "",
      year: "",
      userTag: "",
    },
    onSubmit: async (values) => {
      onClose();
      const { month, day, year } = values;
      const birthdateInSeconds = new Date(`${month} ${day}, ${year}`).getTime() / 1000;

      values = { ...values, fullName: values.fullName, birthdate: birthdateInSeconds };

      await dispatch(getUsersUpdate(values));
      if (imageUrl) {
        await dispatch(getUsersUpdateImageUrl(fileForServer));
      }
      if (avatarUrl) {
        await dispatch(getUsersUpdateAvatarUrl(fileForServerAvatar));
      }
    },
  });
  const birthdateData = formatBirthdate(user.birthdate);
  useEffect(() => {
    formFields.forEach((item) => {
      formik.setFieldValue(item.name, user[item.name]);
    });
    formik.setFieldValue("day", birthdateData.day);
    formik.setFieldValue("month", birthdateData.month);
    formik.setFieldValue("year", birthdateData.year);
  }, [user]);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalContainer>
        <ModalContent>
          <ModalHeader disableGutters={true}>
            <Typography
              variant="h5"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.common.secondary
                    : theme.palette.dark.light_grey,
                display: "flex",
                alignItems: "center",
              }}>
              <CloseOutlinedIcon
                sx={(theme) => ({
                  fill: theme.palette[theme.palette.mode].secondary,
                  marginRight: "20px",
                })}
                onClick={onClose}
              />{" "}
              Edit profile
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
            imageUrl={imageUrl || user.imageUrl}
            avatarUrl={avatarUrl || user.avatarUrl}
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
              <TextField
                key={field.name}
                name={field.name}
                id={field.name}
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
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.common.primary
                      : theme.palette.dark.text_grey,
                  "& .MuiOutlinedInput-input": {
                    paddingTop: "5px",
                  },
                }}
                error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                helperText={formik.touched[field.name] && formik.errors[field.name]}
                InputProps={{
                  sx: {
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.common.primary
                        : theme.palette.dark.text_grey,
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
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.common.primary
                        : theme.palette.dark.text_grey,
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
            ))}
            <ContainerDate>
              {configDateForm.map((field) => (
                <TextField
                  sx={{
                    width: "150px",
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.common.primary
                        : theme.palette.dark.text_grey,
                  }}
                  key={field.name}
                  name={field.name}
                  id={field.name}
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
  fullName: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
  userTag: PropTypes.string,
};
