import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../utils/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
