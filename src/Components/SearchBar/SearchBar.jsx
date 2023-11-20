import SearchIcon from "@mui/icons-material/Search";
import { Stack, TextField } from "@mui/material";
import { useState } from "react";
import { searchBarSX } from "./styleSX";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Зробити fetch
    console.log(searchTerm);
  };

  const inputStyle = {
    height: "15px",
  };

  return (
    <Stack sx={searchBarSX}>
      <form onSubmit={handleSearch}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <SearchIcon style={{ marginLeft: "8px", marginRight: "8px" }} />
            ),
            style: { borderRadius: "25px" },
          }}
          inputProps={{ style: inputStyle }}
        />
      </form>
    </Stack>
  );
};
