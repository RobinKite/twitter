import { CircularProgress, Stack } from "@mui/material";

export const Loader = () => {
  return (
    <Stack
      sx={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}>
      <CircularProgress size="3.5rem" />
    </Stack>
  );
};
