import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { FormControl, Input, Stack, debounce } from "@mui/material";
import { closeIconSX, inputSX, searchBarSX, searchIconSX } from "./styleSX";
import { SearchProgressBar } from "..";
import { fetchFriedsSearch } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const debouncedSearch = debounce((term) => {
    dispatch(fetchFriedsSearch(term));
  }, 500);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      debouncedSearch(searchTerm);
    }
  }, [searchTerm, debouncedSearch]);

  const handleInputClear = () => {
    setSearchTerm("");
  };

  return (
    <Stack sx={searchBarSX}>
      <FormControl fullWidth component="form">
        <Input
          sx={inputSX}
          placeholder="Search"
          disableUnderline
          value={searchTerm}
          onChange={handleSearch}
        />
        <SearchIcon sx={searchIconSX} />
        {searchTerm.trim() && <CancelIcon sx={closeIconSX} onClick={handleInputClear} />}
      </FormControl>
      {searchTerm.trim() && <SearchProgressBar searchText={searchTerm} />}
    </Stack>
  );
};
