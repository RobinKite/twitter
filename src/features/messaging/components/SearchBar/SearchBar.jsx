import { Box, Stack } from "@mui/material";
import { useRef } from "react";
import { Search } from "@/icons";
import { searchBarSx, inputWrapperSx, inputStyle } from "./styles";

export const SearchBar = () => {
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
