import createTheme from '@mui/material/styles/createTheme';

const Theme = createTheme({
  palette: {
    mode: 'dark',
    contrastThreshold: 4.5,
    background: {
      default: '#110111',
      paper: '#221239'
    },
    text: {
      primary: '#fff'
    }
  },
});

export default Theme;
