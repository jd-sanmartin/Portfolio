import Head from 'next/head';
import Link from 'next/link';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface SectionLinkProps {
  text: string,
  route: string
}

const sections: SectionLinkProps[] = [
  { text: 'About me', route: '/about'},
  { text: 'Samples', route: '/samples'},
];

const paperStyles = {
  padding: '1rem',
  outline: 'solid 1px white',
  transition: 'all 0.17s ease-in',
  textAlign: 'center',
  fontWeight: 'bold',
  ':hover': {
    boxShadow: 10,
    outline: '0.2rem solid white',
    cursor: 'pointer',
    backgroundColor: '#424259'
  },
};

const SectionLink = ({ text, route } : SectionLinkProps) => {
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Link href={route}>
        <Paper sx={paperStyles}>{text}</Paper>
      </Link>
    </Grid>
  )
}

export default function Home() {
  return (
    <div style={{overflow: 'auto'}}>
      <Head>
        <title>Portfolio - Juan David Sanmartin</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems:'center',
          height: 'calc(100vh - 65px)',
        }}
      >
        <Paper sx={{ padding: 3, minWidth: '80vw', position: 'relative'}} >
          <Typography variant='h3' align='center' mb={1}>Juan David Sanmartín</Typography>
          <Typography variant='h6' align='center' mb={2}>Welcome to my portfolio</Typography>

          <Grid
            container
            spacing={2}
            justifyContent='center'
            mb={3}
          >
            {sections.map((x,i) => (
              <SectionLink key={`section-link-${i}`} {...x} />
            ))}
          </Grid>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link
              href='https://www.linkedin.com/in/juan-david-sanmartin-betancur/'
              style={{
                fontSize: 40
              }} 
            >
              <Tooltip title='Contact me' placement='top' arrow>  
                <LinkedInIcon fontSize='inherit' />
              </Tooltip>
            </Link>

            <Link
              href='https://github.com/juansanmartin251880/Portfolio'
              style={{
                fontSize: 40
              }} 
            >
              <Tooltip title='View source code' placement='top' arrow>  
                <GitHubIcon fontSize='inherit' />
              </Tooltip>
            </Link>
          </div>
        </Paper>
      </Container>
    </div>
  )
}
