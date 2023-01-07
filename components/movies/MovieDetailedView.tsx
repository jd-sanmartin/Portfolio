import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
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
    <Paper sx={{ height: '100%', bgColor: '#631052' }} elevation={3}>
      <Grid container spacing={0} sx={{ height: '100%' }}>
        <Grid item lg={5} xs={12}>
          <Box sx={{height: '100%', width: '100%', bgcolor: 'blue'}}></Box>
        </Grid>

        <Grid item lg={7} xs={12}>
          <Box p={3} position='relative' sx={{height: '100%'}}>
            <Typography variant='h5' fontWeight='bold'>
              {title}
            </Typography>

            <Rating value={rating} precision={0.5} readOnly />

            <Table sx={{ px: 0 }}>
              <TableRow>
                <TableCell sx={{ border: 0, px: 0, width: '25%' }}>Year:</TableCell>
                <TableCell sx={{ border: 0 }}>{year}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: 0, px: 0 }}>Running Time:</TableCell>
                <TableCell sx={{ border: 0 }} align='left'>{runningTime}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: 0, px: 0 }}>Directed By:</TableCell>
                <TableCell sx={{ border: 0 }}>{director}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ border: 0, px: 0 }}>Language:</TableCell>
                <TableCell sx={{ border: 0 }}>{language}</TableCell>
              </TableRow>
            </Table>

            <Typography>{synopsis}</Typography>

            <div style={{ position: 'absolute', bottom: 15, left: 15, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '1rem' }}>
              <Button variant='outlined'>Play Movie</Button>
              <Button variant='outlined'>Watch Trailer</Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
