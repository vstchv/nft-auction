import { Button, FormControl, InputAdornment, TextField } from "@mui/material";

import Grid from "@mui/material/Grid";
import Logo from "../Logo";
import React from "react";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <>
      <Grid container className={styles.headerContainer}>
        <Grid item xs={3} className={styles.gridItem}>
          <Logo />
        </Grid>
        <Grid item xs={5} className={styles.gridItem}>
          <SearchBar />
        </Grid>
        <Grid item xs={4} className={styles.gridItem}>
          <Button className={styles.links} href="/home">
            Home
          </Button>
          <Button className={styles.links} href="/explore">
            Explore
          </Button>
          <Button className={styles.links} href="/login">
            Login
          </Button>
          <Button className={styles.links} href="/login">
            Profile
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
