import { Container, FormControl, Link, TextField } from '@mui/material';

import Grid from '@mui/material/Grid';
import Logo from './Logo';
import React from 'react';
import theme from '../../utils/theme';

const Header = () => {
	return (
		<>
			<Grid justifyContent='center' alignItems='center' container spacing={3}>
				<Grid item xs={3}>
					<Logo />
				</Grid>
				<Grid item xs={3}>
					<FormControl>
						<TextField placeholder='Find items, users and activities' />
					</FormControl>
				</Grid>
				<Grid item xs={3}>
					<Container>
						<Link href='/' color={theme.palette?.text?.primary}>
							Home
						</Link>
						<Link href='/' color={theme.palette?.text?.primary}>
							Activity
						</Link>
						<Link href='/' color={theme.palette?.text?.primary}>
							Explore
						</Link>
					</Container>
				</Grid>
			</Grid>
		</>
	);
};

export default Header;
