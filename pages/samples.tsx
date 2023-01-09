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
          height: 'calc(100% - 85px)',
          paddingBottom: 2,
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
        }}
      >
        <Paper sx={{ padding: 3 }} >
          <Typography variant='h3' mb={1}>Demo Samples</Typography>
          <Typography variant='subtitle1' mb={2}>These are some samples of what I can do. There are not much samples right now, but more are coming soon! </Typography>

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
