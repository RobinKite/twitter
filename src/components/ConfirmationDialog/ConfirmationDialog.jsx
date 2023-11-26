import { useState } from "react";
import { Dialog, styled } from "@mui/material";
import PropTypes from "prop-types";

const StyledDialog = styled(Dialog)({
  fontSize: "0.9375rem",

  "& .MuiDialog-paper": {
    maxWidth: 320,
    minWidth: 320,
    margin: "0 auto",
    padding: "2rem",
    borderRadius: "1rem",
  },
});

const Title = styled("h1")({
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
});

const Description = styled("p")({
  lineHeight: "1.25rem",
  color: "#536471",
});

const Actions = styled("div")({
  marginTop: "1.5rem",
  display: "flex",
  flexDirection: "column",
  rowGap: "0.75rem",
});

const Button = styled("button")({
  cursor: "pointer",
  minHeight: 44,
  border: "1px solid #cfd9de",
  borderRadius: "1.5rem",
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
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.black,

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
    <StyledDialog open={open} onClose={handleClose}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Actions>
        <ActionButton onClick={handleAction}>{actionButton.title}</ActionButton>
        <Button onClick={handleClose}>{closeButton.title}</Button>
      </Actions>
    </StyledDialog>
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
