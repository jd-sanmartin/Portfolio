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
  } = movie;

  return (
    <Box>
        <Card
          variant='outlined'
          sx={{
            boxShadow: selected ? '0px 0px 5px 5px #626' : '',
          }}
        >
          {/* <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          /> */}
          <CardContent sx={{ p: 1 }}>
            <Box sx={{ bgcolor: 'red', height: 240, width: '100%', mb: 1 }}></Box>
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