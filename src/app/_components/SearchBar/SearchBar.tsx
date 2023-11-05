import { FormControl, InputAdornment, TextField } from "@mui/material";

import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar: FC<SearchBar> = () => {
  return (
    <>
      <FormControl>
        <TextField
          // id="search"
          //type="search"
          placeholder="Find items"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </>
  );
};

export default SearchBar;

interface SearchBar {}
