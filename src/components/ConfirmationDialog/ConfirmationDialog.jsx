import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Dialog as MuiDialog, Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material";
import PropTypes from "prop-types";

const Dialog = styled(MuiDialog)({
  fontSize: "0.9375rem",

  "& .MuiDialog-paper": {
    maxWidth: 320,
    minWidth: 320,
    margin: "0 auto",
    padding: "2rem",
    borderRadius: "1rem",
  },
});

const Title = styled(Typography)({
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
});

const Description = styled(Typography)(({ theme }) => ({
  lineHeight: "1.25rem",
  // color: "#536471",
  color: theme.palette.common.primary,
  fontSize: "inherit",
}));

const Actions = styled(Box)({
  marginTop: "1.5rem",
  display: "flex",
  flexDirection: "column",
  rowGap: "0.75rem",
});

const Button = styled(MuiButton)({
  minHeight: 44,
  border: "1px solid #cfd9de",
  fontWeight: 600,
  transition: "background-color 200ms",

  ":hover": {
    backgroundColor: "#e7e7e8",
  },
  ":active": {
    backgroundColor: "#cfd0d1",
  },
});

const ActionButton = styled(Button)(({ theme }) => ({
  color: theme.palette[theme.palette.mode].primary,
  backgroundColor: theme.palette[theme.palette.mode].secondary,

  ":hover": {
    backgroundColor: "#272c30",
  },
  ":active": {
    backgroundColor: "#3f4347",
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
