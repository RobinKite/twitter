import { Box, Stack, Typography, IconButton, useTheme } from "@mui/material";
import { Gear, MessagePlus } from "@/icons";
import { WelcomeMessage } from "@/features/messaging/components";
import { wrapperSx, headerSx, titleSx, buttonsSx } from "./styles";
import { useNavigate } from "react-router-dom";

export const Conversations = () => {
  const isEmpty = true;
  const navigate = useNavigate();
  const handleCreateCoversation = () => {};
  const theme = useTheme();
  return (
    <Stack sx={wrapperSx}>
      <Stack sx={headerSx}>
        <Typography variant="h2" sx={titleSx}>
          Messages
        </Typography>
        <Stack sx={buttonsSx}>
          <IconButton onClick={() => navigate("/messages/settings")}>
            <Gear
              style={{
                fill: theme.palette[theme.palette.mode].secondary,
              }}
              size={21}
            />
          </IconButton>
          <IconButton onClick={handleCreateCoversation}>
            <MessagePlus
              style={{
                fill: theme.palette[theme.palette.mode].secondary,
              }}
              size={20}
            />
          </IconButton>
        </Stack>
      </Stack>
      {isEmpty && (
        <Box sx={{ maxWidth: 340, margin: "0 auto", marginTop: "1.5rem" }}>
          <WelcomeMessage
            title="Welcome to your inbox!"
            text="Drop a line, share posts and more with private conversations between you and others on X."
            buttonText="Write a message"
          />
        </Box>
      )}
    </Stack>
  );
};
