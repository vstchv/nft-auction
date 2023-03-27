import { Container, FormControl, InputAdornment, Link, TextField } from '@mui/material';

import Grid from '@mui/material/Grid';
import Logo from '../Logo';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Header.module.css';
import theme from '../../../utils/theme';

const Header = () => {
	return (
		<>
			<Grid container className={styles.headerContainer}>
				<Grid item xs={3} className={styles.gridItem}>
					<Logo />
				</Grid>
				<Grid item xs={3} className={styles.gridItem}>
					<FormControl>
						<TextField
							id='search'
							type='search'
							placeholder='Find items, users and activities'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<SearchIcon />
									</InputAdornment>
								),
							}}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={3} className={styles.gridItem}>
					<Link href='/home' color={theme.palette?.text?.primary}>
						Home
					</Link>
					<Link href='/activity' color={theme.palette?.text?.primary}>
						Activity
					</Link>
					<Link href='/explore' color={theme.palette?.text?.primary}>
						Explore
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default Header;
