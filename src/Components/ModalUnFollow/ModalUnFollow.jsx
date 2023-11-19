import React, { useState } from "react";
import { Modal, Paper, Typography, Button } from "@mui/material/";
import { styled } from "@mui/material/styles";

const ModalContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
});

const ModalContent = styled(Paper)({
  padding: "16px",
  width: 300,
  height: 300,
  borderRadius: 20,
});

const ButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: 30,
});

const ButtonUnfollow = styled(Button)({
  color: "rgb(255 255 555)",
  backgroundColor: "rgb(0, 0, 0)",
  textTransform: "capitalize",
  borderRadius: 25,
  minWidth: 280,
  margin: "0 auto",
  padding: 10,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "rgb(0, 0, 0, 0.85)",
  },
});

const ButtonCancell = styled(Button)({
  backgroundColor: "rgb(255 255 555)",
  color: "rgb(0, 0, 0)",
  margin: "0 auto",
  marginTop: 20,
  textTransform: "capitalize",
  borderRadius: 25,
  minWidth: 280,
  padding: 10,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "rgb(248, 248, 248)",
  },
});

const ModalUnFollow = ({ userTag }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUnfollow = () => {
    // Add unfollow
    handleClose();
  };

  return (
    <>
      {/* Delete after fix */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Unfollow Modal
      </Button>
      {/* ----------------------------- */}

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ModalContent>
            <Typography variant="h6" padding={"15px 15px 0 15px"}>
              Unfollow {userTag}?
            </Typography>
            <Typography padding={"15px 15px 0 15px"}>
              Their posts will no longer show up in your For You timeline. You
              can still view their profile unless their posts are protected.
            </Typography>
            <ButtonContainer>
              <ButtonUnfollow
                variant="contained"
                color="primary"
                onClick={handleUnfollow}
              >
                Unfollow
              </ButtonUnfollow>
              <ButtonCancell
                variant="contained"
                color="secondary"
                onClick={handleClose}
              >
                Cancel
              </ButtonCancell>
            </ButtonContainer>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ModalUnFollow;
