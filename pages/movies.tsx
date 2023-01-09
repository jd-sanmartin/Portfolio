import Head from 'next/head';

import { useState } from 'react';

import Paper from '@mui/material/Paper';
import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';

import SideBar from '../components/movies/SideBar';
import MoviesContainer from '../components/movies/MoviesContainer';
import { useWidth } from '../hooks/useWidth';

export default function Movies() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const openSideBar = () => {
    setOpenDrawer(true);
  };

  const closeSideBar = () => {
    console.log('closing sidebar')
    setOpenDrawer(false);
  };

  return (
    <>
      <Head>
				<title>Movies</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <Container sx={{ height: 'calc(100vh - 65px)' }}>
        <Paper sx={{ height: '100%' }}>
          <Grid container>
            { useWidth() !== 'xs' ?
              (
                <Grid item sm={3}>
                  <SideBar />
                </Grid>
              ) : (
                <Drawer
                  open={openDrawer}
                  onClose={closeSideBar}
                >
                  <SideBar />
                </Drawer>
              )
            }
            <Grid item sm={9} xs={12}>
              <MoviesContainer openSideBar={openSideBar} />
            </Grid>

          </Grid>
        </Paper>
      </Container>
    </>
  );
}