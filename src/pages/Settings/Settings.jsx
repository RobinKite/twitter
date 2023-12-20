import { Button, Stack, Typography } from "@mui/material";
import { Key } from "@/icons";
import { Container, ChangePasswordModal } from "@/components";
import { useDispatch } from "react-redux";
import { setIsChangePasswordModalActive } from "@/redux/slices/appSlice";

export const Settings = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Stack
        sx={{
          flexGrow: 1,
          borderRightWidth: "1px",
          borderRightStyle: "solid",
          borderRightColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.dark.light_grey
              : theme.palette.dark.border_grey,

          borderLefttWidth: "1px",
          borderLeftStyle: "solid",
          borderLeftColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.dark.light_grey
              : theme.palette.dark.border_grey,
        }}>
        <Typography
          variant="h1"
          sx={{
            // color: "#0F1419",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.common.secondary
                : theme.palette.dark.light_grey,

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
