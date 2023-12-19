import { Box, Typography } from "@mui/material";
import { Container } from "@/components";

export const Settings = () => {
  return (
    <Container>
      <Box
        sx={{
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
          paddingLeft: "16px",
          height: "100vh",
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
            fontWeight: 700,
            marginTop: "10px",
          }}>
          Settings
        </Typography>
      </Box>
    </Container>
  );
};
