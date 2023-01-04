import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';

import { useTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Theme from '../utils/Theme';

export default function App({ Component, pageProps }: AppProps) {
  return <div style={{overflow: 'hidden'}}>
    <ThemeProvider theme={Theme}>
      <Box sx={{ bgcolor: 'background.default', height: '100vh' }}>
        <NavBar />
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  </div>
}
