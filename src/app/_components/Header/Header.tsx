import { Button, Grid } from "@mui/material";

import Logo from "../Logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";

const Header = ({ isLoggedIn = false }) => {
  const links = [
    { text: "Home", href: "/" },
    { text: "Explore", href: "/explore" },
    { text: "Login", href: "/login" },
    { text: "Profile", href: "/profile", isVisible: isLoggedIn },
  ];

  return (
    <Grid container className={styles.headerContainer}>
      <Grid item xs={3} className={styles.gridItem}>
        <Logo />
      </Grid>
      <Grid item xs={5} className={styles.gridItem}>
        <SearchBar />
      </Grid>
      <Grid item xs={4} className={styles.gridItem}>
        {links
          .filter((link) => link.isVisible !== false)
          .map((link, index) => (
            <Button
              key={index}
              color="inherit"
              className={styles.links}
              href={link.href}
            >
              {link.text}
            </Button>
          ))}
      </Grid>
    </Grid>
  );
};

export default Header;
