import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { FormControl, Input, Stack, debounce } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { SearchProgressBar } from "@/components";
import { fetchFriedsSearch } from "@/redux/slices/userSlice";
import { closeIconSX, inputSX, searchBarSX, searchIconSX, formSX } from "./styleSX";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const parentRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const clearInput = () => {
    setSearchTerm("");
  };

  const debouncedSearch = debounce((term) => {
    dispatch(fetchFriedsSearch(term));
  }, 500);

  useEffect(() => {
    if (searchTerm.trim() !== "") debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  useEffect(() => {
    const handleClick = ({ target }) => {
      if (!parentRef.current.contains(target)) clearInput();
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Stack ref={parentRef} sx={searchBarSX}>
      <FormControl sx={formSX} fullWidth component="form">
        <Input
          sx={inputSX}
          placeholder="Search"
          disableUnderline
          value={searchTerm}
          onChange={handleSearch}
        />
        <SearchIcon sx={searchIconSX} />
        {searchTerm.trim() && <CancelIcon sx={closeIconSX} onClick={clearInput} />}
      </FormControl>
      {searchTerm.trim() && <SearchProgressBar searchText={searchTerm} />}
    </Stack>
  );
};
