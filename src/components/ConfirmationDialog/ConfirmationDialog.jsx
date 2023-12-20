import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Dialog as MuiDialog, Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material";
import PropTypes from "prop-types";
import { Themes } from "@/themes/theme";

const Dialog = styled(MuiDialog)(({ theme }) => ({
  fontSize: "0.9375rem",
  "& .css-ybqyer-MuiPaper-root-MuiDialog-paper": {
    backgroundImage: "unset",
  },

  "& .MuiDialog-paper": {
    maxWidth: 320,
    minWidth: 320,
    margin: "0 auto",
    padding: "2rem",
    borderRadius: "1rem",
    backgroundColor: theme.palette[theme.palette.mode].primary,
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
  color:
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.secondary
      : theme.palette.dark.light_grey,
}));

const Description = styled(Typography)(({ theme }) => ({
  lineHeight: "1.25rem",
  // color: "#536471",
  color:
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.primary
      : theme.palette.dark.text_grey,
  fontSize: "inherit",
}));

const Actions = styled(Box)({
  marginTop: "1.5rem",
  display: "flex",
  flexDirection: "column",
  rowGap: "0.75rem",
});

const Button = styled(MuiButton)(({ theme }) => ({
  minHeight: 44,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor:
    theme.palette.mode === Themes.LIGHT
      ? theme.palette.common.primary
      : theme.palette.light.banner,
  fontWeight: 600,
  transition: "background-color 200ms",
  color: theme.palette[theme.palette.mode].secondary,
  backgroundColor: theme.palette[theme.palette.mode].primary,
  // ":hover": {
  //   backgroundColor: "#e7e7e8",
  // },
  // ":active": {
  //   backgroundColor: "#cfd0d1",
  // },
  ":hover": {
    backgroundColor: theme.palette[theme.palette.mode].hover,
  },
  ":active": {
    // backgroundColor: "#3f4347",
    backgroundColor: theme.palette[theme.palette.mode].hover,
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  color: theme.palette[theme.palette.mode].primary,

  backgroundColor: theme.palette[theme.palette.mode].secondary,

  ":hover": {
    backgroundColor:
      theme.palette.mode === Themes.LIGHT
        ? theme.palette.dark.hover
        : theme.palette.light.hover,
  },
  ":active": {
    // backgroundColor: "#3f4347",
    backgroundColor:
      theme.palette.mode === Themes.LIGHT
        ? theme.palette.dark.hover
        : theme.palette.light.hover,
  },
}));

export const ConfirmationDialog = ({ title, description, actionButton, closeButton }) => {
  const [open, setOpen] = useState(true);

  const handleAction = () => {
    actionButton.callback && actionButton.callback();
    setOpen(false);
  };

  const handleClose = () => {
    closeButton.callback && closeButton.callback();
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Actions>
        <ActionButton onClick={handleAction}>{actionButton.title}</ActionButton>
        <Button onClick={handleClose}>{closeButton.title}</Button>
      </Actions>
    </Dialog>
  );
};

ConfirmationDialog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  actionButton: PropTypes.shape({
    title: PropTypes.string.isRequired,
    callback: PropTypes.func,
  }).isRequired,
  closeButton: PropTypes.shape({
    title: PropTypes.string.isRequired,
    callback: PropTypes.func,
  }).isRequired,
};
