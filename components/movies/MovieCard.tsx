import Image from 'next/image';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import Movie from "../../types/movies/Movie";

interface props {
  movie: Movie;
  selected: boolean;
}

export default function MovieCard({movie, selected}: props) {
  const {
    title,
    rating,
    imagePath,
  } = movie;

  return (
    <Box>
        <Card
          variant='outlined'
          sx={{
            boxShadow: selected ? '0px 0px 3px 3px #646' : '',
          }}
        >
          <CardContent sx={{ p: 1 }}>
            <Image
              src={`/images/movies/${imagePath}`}
              alt={title}
              height='200'
              width='150'
              style={{ display: 'block', width: '100%', height: 'auto', marginBottom: '0.5rem' }}
            />
            <Typography variant='h5'>
              {title}
            </Typography>

            <Rating value={rating} precision={0.5} readOnly />

          </CardContent>

          <CardActions sx={{ display: "flex", justifyContent: 'flex-start' }}>
            <IconButton> <PlayCircleOutlineIcon /> </IconButton>
            <IconButton> <ControlPointIcon /> </IconButton>
          </CardActions>

        </Card>
      </Box>
  );
}