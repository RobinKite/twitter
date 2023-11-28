import { Box, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import { Gear, MessagePlus, Search } from "@/icons";
import { WelcomeMessage } from "@/components";
import { wrapperSx, headerSx, titleSx, buttonsSx, iconStyle } from "./styles";
import { searchBarSx, inputWrapperSx, inputStyle } from "./styles";

// eslint-disable-next-line no-unused-vars
const SearchBar = () => {
  const inputRef = useRef(null);

  return (
    <Box onClick={() => inputRef.current.focus()} sx={searchBarSx}>
      <Stack sx={inputWrapperSx}>
        <Search />
        <input ref={inputRef} style={inputStyle} placeholder="Search Direct Messages" />
      </Stack>
    </Box>
  );
};

export const Conversations = () => {
  return (
    <Stack sx={wrapperSx}>
      <Stack sx={headerSx}>
        <Typography variant="h2" sx={titleSx}>
          Messages
        </Typography>
        <Stack sx={buttonsSx}>
          <Gear style={iconStyle} size={21} />
          <MessagePlus style={iconStyle} size={20} />
        </Stack>
      </Stack>
      <Box sx={{ maxWidth: 340, margin: "0 auto", marginTop: "2rem" }}>
        <WelcomeMessage
          title="Welcome to your inbox!"
          text="Drop a line, share posts and more with private conversations between you and others on X."
          buttonText="Write a message"
        />
      </Box>
    </Stack>
  );
};
