import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { KeyIcon } from "@/icons/custom/Key";
import { Container } from "@/components";
import { ChangePasswordModal } from "@/components/ChangePasswordModal/ChangePasswordModal";

export const Settings = () => {
  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);

  const handleOpenChangePasswordModal = () => {
    setChangePasswordModalOpen(true);
  };

  const handleCloseChangePasswordModal = () => {
    setChangePasswordModalOpen(false);
  };

  return (
    <Container>
      <Box
        sx={{
          borderRight: "1px solid #EFF3F4",
          borderLeft: "1px solid #EFF3F4",
          height: "100vh",
        }}>
        <Typography
          variant="h1"
          sx={{
            color: "#0F1419",
            fontSize: "20px",
            fontWeight: "700",
            marginTop: "10px",
            paddingLeft: "16px",
          }}>
          Settings
        </Typography>
        <Button
          variant="text"
          onClick={handleOpenChangePasswordModal}
          sx={{
            width: "100%",
            borderRadius: "0px",
            textAlign: "begin",
            color: "#0F1419",
            fontSize: "16px",
            marginTop: "20px",
            ":hover": {
              backgroundColor: "rgb(248, 248, 248)",
            },
          }}>
          <Stack
            sx={{
              marginRight: "10px",
              marginTop: "5px",
            }}>
            <KeyIcon />
          </Stack>

          <Typography sx={{ marginRight: "60%" }}>Change password</Typography>
        </Button>

        <ChangePasswordModal
          open={changePasswordModalOpen}
          onClose={handleCloseChangePasswordModal}
        />
      </Box>
    </Container>
  );
};
