import { useState, useEffect } from 'react';

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Box from '@mui/material/Box';

import MovieCard from "./MovieCard";
import MovieDetailedView from "./MovieDetailedView";

import MoviesData from '../../data/MoviesData';

export default function MoviesContainer() {
  const [selected, setSelected] = useState(3);
  const [hasSelected, setHasSelected] = useState(false);

  const [infoModalIndex, setInfoModalIndex] = useState(-1);

  const currentBreakPoint = 'lg';

  const breakpointGridWidths = {
    lg: 3,
    md: 4,
    sm: 6,
  };

  useEffect(() => {
    const numCols = 12 / breakpointGridWidths[currentBreakPoint];
    setInfoModalIndex(Math.floor(selected / numCols) * numCols);

    console.log({ selected, numCols, index: Math.floor(selected / numCols) * numCols });
  },[selected]);

  const handleClick = (i: number) => {
    setHasSelected(true);
    setSelected(i);
  }

  return (
    <>
      <Box sx={{ backgroundColor: "#e00", width: '100%', position: 'sticky', top: 0 }}>(Searchbox and sorting options)</Box>
      <Grid container spacing={1} p={3} sx={{
          maxHeight: 'calc(100vh - 65px)',
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
        {
          MoviesData.map((movie, i) => (
            <>
              {
                (i === infoModalIndex && hasSelected) && (
                  <Grid item xs={12} sx={{ height: '500px', my: 2 }}>
                    <MovieDetailedView movie={MoviesData[selected]} />
                  </Grid>
                )
              }

              <Grid
                item
                key={i}
                {...breakpointGridWidths}
              >
                <div onClick={() => handleClick(i)}>
                  <MovieCard movie={movie} selected={i === selected} />
                </div>
              </Grid>
            </>
          ))
        }
      </Grid>
    </>
  );
}
