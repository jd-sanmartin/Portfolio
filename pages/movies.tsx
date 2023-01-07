import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Theme } from '@mui/material/styles';

import Container from '@mui/system/Container';
import SideBar from '../components/movies/SideBar';
import MoviesContainer from '../components/movies/MoviesContainer';

import Grid from '@mui/material/Grid';

export default function Movies() {
  return (
    <Container sx={{ height: 'calc(100vh - 65px)' }}>
      <Paper sx={{ height: '100%' }}>
        <Grid container>
          <Grid item xs={3}>
            <SideBar />
          </Grid>

          <Grid item xs={9}>
            <MoviesContainer />
          </Grid>

        </Grid>
      </Paper>
    </Container>
  );
}