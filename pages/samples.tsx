import Head from 'next/head';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import SampleCard from '../components/projects/SampleCard';

import SamplesData from '../data/SamplesData';

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo Samples</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        sx={{
          mt: 3,
          alignItems:'center',
          height: 'calc(100% - 65px)',
          paddingBottom: 2,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            padding: 3,
            maxHeight: '90%',
            overflowY: 'auto',
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': {
                width: '0.4em',
            },
            '&::-webkit-scrollbar-track': {
                background: '#555',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#aaa',
            },
            '&::-webkit-scrollbar-thumb:hover': {
                background: '#555'
            },
          }}>
          <Typography variant='h3' mb={1}>Demo Samples</Typography>

          <Grid
            container
            spacing={1}
          >
            {
              SamplesData.map((props,i) => (
                <Grid key={`sample-card-${i}`} item sm={12} md={6}>
                  <SampleCard  {...props} />
                </Grid>
              ))
            }
          </Grid>
        </Paper>
      </Container>
    </>
  )
}
