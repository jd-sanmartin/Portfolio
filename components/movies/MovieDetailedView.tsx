import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';

import Movie from '../../types/movies/Movie';

interface props {
  movie: Movie;
}

export default function MovieDetailedView ({movie}: props) {
  const {
    title,
    director,
    year,
    rating,
    language,
    runningTime,
    synopsis,
    imagePath,
  } = movie;

  return (
    <Paper sx={{ bgColor: '#631052' }} elevation={3}>
      <Grid container spacing={0}>
        <Grid item xs={5} sm={4} md={5}>
          <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <Image
              src={`/images/movies/${imagePath}`}
              alt={title}
              height='200'
              width='150'
              style={{ display: 'block', width: '100%', height: 'auto', }}
            />
          </div>
        </Grid>

        <Grid item xs={7} sm={8} md={7}>
          <Box p={3} position='relative' sx={{height: '100%'}}>
              <Typography variant='h5' fontWeight='bold'>
                {title}
              </Typography>

              <Rating value={rating} precision={0.5} readOnly />

              <Table sx={{ px: 0 }}>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ border: 0, px: 0, width: '25%' }}>Year:</TableCell>
                    <TableCell sx={{ border: 0 }}>{year}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ border: 0, px: 0 }}>Running Time:</TableCell>
                    <TableCell sx={{ border: 0 }} align='left'>{runningTime} minutes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ border: 0, px: 0 }}>Directed By:</TableCell>
                    <TableCell sx={{ border: 0 }}>{director}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ border: 0, px: 0 }}>Language:</TableCell>
                    <TableCell sx={{ border: 0 }}>{language}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Typography>{synopsis}</Typography>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '1rem', marginTop: 20 }}>
              <Button variant='contained'>Play Movie</Button>
              <Button variant='outlined'>Watch Trailer</Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
