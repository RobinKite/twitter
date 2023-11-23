import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { FormControl, Input, Stack, debounce } from "@mui/material";
import { closeIconSX, inputSX, searchBarSX, searchIconSX } from "./styleSX";
import { SearchProgressBar } from "..";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: add fetch
    console.log(searchTerm);
    console.log(debounce);
    // export default function debounce(func, wait = 166) {
    // let timeout;
    // function debounced(...args) {
    //   const later = () => {
    //     // @ts-ignore
    //     func.apply(this, args);
    //   };
    //   clearTimeout(timeout);
    //   timeout = setTimeout(later, wait);
    // }
    // debounced.clear = () => {
    //   clearTimeout(timeout);
    // };
    // return debounced;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchTerm.trim() !== "") {
      handleSearch();
    }
  };

  const handleInputClear = () => {
    setSearchTerm("");
  };

  // const debouncedOnChange = debounce(handleSearch, 500);

  return (
    <Stack sx={searchBarSX}>
      <FormControl fullWidth component="form">
        <Input
          sx={inputSX}
          placeholder="Search"
          disableUnderline
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchIcon sx={searchIconSX} />
        {searchTerm.trim() && <CancelIcon sx={closeIconSX} onClick={handleInputClear} />}
      </FormControl>
      {searchTerm.trim() && <SearchProgressBar searchText={searchTerm} />}
    </Stack>
  );
};
