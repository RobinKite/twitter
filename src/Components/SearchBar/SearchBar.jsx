import React, { useState } from "react";
import classNames from "classnames";
import styles from "./SearchBar.module.scss";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
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
    <div className={classNames(styles.searchbar)}>
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
    </div>
  );
};

export default SearchBar;
