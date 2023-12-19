import { Box, Stack, useTheme } from "@mui/material";
import { useRef } from "react";
import { Search } from "@/icons";
import { searchBarSx, inputWrapperSx, inputStyle } from "./styles";

export const SearchBar = () => {
  const inputRef = useRef(null);
  const theme = useTheme();
  return (
    <Box onClick={() => inputRef.current.focus()} sx={searchBarSx}>
      <Stack sx={inputWrapperSx}>
        <Search />
        <input
          ref={inputRef}
          style={{
            ...inputStyle,
            color: theme.palette[theme.palette.mode].accent,
          }}
          placeholder="Search Direct Messages"
        />
      </Stack>
    </Box>
  );
};
