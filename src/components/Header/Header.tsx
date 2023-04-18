import {
  Button,
  Container,
  FormControl,
  InputAdornment,
  Link,
  MenuItem,
  TextField,
} from "@mui/material";

import Grid from "@mui/material/Grid";
import Logo from "../Logo";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.css";
import theme from "../../../utils/theme";

const Header = () => {
  return (
    <>
      <Grid container className={styles.headerContainer}>
        <Grid item xs={3} className={styles.gridItem}>
          <Logo />
        </Grid>
        <Grid item xs={5} className={styles.gridItem}>
          <FormControl>
            <TextField
              id="search"
              type="search"
              className={styles.searchBar}
              placeholder="Find items, users and activities"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4} className={styles.gridItem}>
          <Button className={styles.links} href="/home">
            Home
          </Button>
          <Button className={styles.links} href="/activity">
            Activity
          </Button>
          <Button className={styles.links} href="/explore">
            Explore
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
