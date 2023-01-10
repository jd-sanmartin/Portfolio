import createTheme from '@mui/material/styles/createTheme';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    contrastThreshold: 4.5,
    primary: {
      main: '#ac77b0',
      light: '#ba68c8',
      dark: '#7b1fa2'
    },
  },
});

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    contrastThreshold: 4.5,
    primary: {
      main: '#5c2790',
      light: '#ba68c8',
      dark: '#7b1fa2'
    },
    secondary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0'
    },
  },
});
