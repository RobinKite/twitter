import { Box, Typography } from "@mui/material";

const Settings = () => {
  return (
    <Box
      sx={{
        borderRight: "1px solid #EFF3F4",
        borderLeft: "1px solid #EFF3F4",
        paddingLeft: "16px",
        height: "100vh",
      }}>
      <Typography
        variant="h1"
        sx={{
          color: "#0F1419",
          fontSize: "20px",
          fontWeight: 700,
          marginTop: "10px",
        }}>
        Settings
      </Typography>
    </Box>
  );
};

export default Settings;
