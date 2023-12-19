import { Button, Stack, Typography } from "@mui/material";
import { Key } from "@/icons";
import { Container } from "@/components";
import { ChangePasswordModal } from "@/components/ChangePasswordModal/ChangePasswordModal";
import { useDispatch } from "react-redux";
import { setIsChangePasswordModalActive } from "@/redux/slices/appSlice";

export const Settings = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Stack
        sx={{
          flexGrow: 1,
          borderRight: "1px solid #EFF3F4",
          borderLeft: "1px solid #EFF3F4",
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
          disableFocusRipple={true}
          onClick={() => dispatch(setIsChangePasswordModalActive(true))}
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "row",
            paddingInline: "1rem",
            paddingBlock: "1.25rem",
            alignItems: "center",
            borderRadius: 0,
            color: "#0F1419",
            fontSize: "1rem",
            marginTop: "1rem",

            ":hover": {
              backgroundColor: "rgb(248, 248, 248)",
            },
          }}>
          <Key size={18.75} style={{ marginRight: "0.5rem" }} />
          <Typography>Change password</Typography>
        </Button>
        <ChangePasswordModal />
      </Stack>
    </Container>
  );
};
