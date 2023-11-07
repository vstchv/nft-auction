" use client";

import { Button, Grid } from "@mui/material";
import { FC, useEffect } from "react";

import Logo from "../Logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";
import useAuth from "@/app/_context/useAuth";

const Header: FC<HeaderProps> = ({ links }: HeaderProps) => {
  return (
    <Grid container className={styles.headerContainer}>
      <Grid item xs={3} className={styles.gridItem}>
        <Logo />
      </Grid>
      <Grid item xs={5} className={styles.gridItem}>
        <SearchBar />
      </Grid>
      <Grid item xs={4} className={styles.gridItem}>
        <div className="flex justify-end space-x-4">
          {links.map((link) => {
            if (link.isVisible == undefined || link.isVisible == true) {
              return (
                <Button
                  key={link.text}
                  variant="text"
                  color="primary"
                  href={link.href}
                >
                  {link.text}
                </Button>
              );
            }
          })}
        </div>
      </Grid>
    </Grid>
  );
};

interface HeaderProps {
  links: Link[];
}

interface Link {
  text: string;
  href: string;
  isVisible?: boolean;
}

export default Header;
