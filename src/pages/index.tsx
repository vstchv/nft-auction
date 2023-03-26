import { Button, Typography } from '@mui/material';

import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import Logo from '@/components/Logo';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Header />
		</>
	);
}
