import type { AppProps } from 'next/app';
import { useState, useContext, createContext } from 'react';

import NavBar from '../components/NavBar';
import '../styles/globals.css';

import { useTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { DarkTheme, LightTheme } from '../utils/Themes';

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }; 

  return <div>
    <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
      <Box sx={{ bgcolor: 'background.default', height: '110vh' }}>
        <NavBar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  </div>
}
