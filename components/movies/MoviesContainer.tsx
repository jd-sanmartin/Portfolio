import { useState, useEffect, useRef } from 'react';

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useWidth } from '../../hooks/useWidth';

import MovieCard from "./MovieCard";
import MovieDetailedView from "./MovieDetailedView";

import MoviesData from '../../data/MoviesData';
import SearchBar from './SearchBar';

interface props {
  openSideBar(): void;
}

export default function MoviesContainer({openSideBar} : props) {
  const [movies, setMovies] = useState(MoviesData);

  const [selected, setSelected] = useState(-1);
  const [hasSelected, setHasSelected] = useState(false);

  const [infoModalIndex, setInfoModalIndex] = useState(-1);

  const currentBreakPoint = useWidth();

  const breakpointGridWidths = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 4,
    xs: 6,
  };

  useEffect(() => {
    const numCols = 12 / breakpointGridWidths[currentBreakPoint];
    setInfoModalIndex(Math.floor(selected / numCols) * numCols);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selected, currentBreakPoint]);

  const handleClick = (i: number) => {
    setHasSelected(true);
    setSelected(i);
  };

  const handleTextBoxChange = (substring: string) => {
    setMovies(MoviesData.filter(m => m.title.toLowerCase().includes(substring.toLowerCase())));
  };

  return (
    <Box sx={{
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
      <SearchBar handleTextBoxChange={handleTextBoxChange} openSideBar={openSideBar} />

      <Grid container spacing={1} p={3}
      >
        {
          movies.map((movie, i) => (
            <>
              {
                (i === infoModalIndex && hasSelected) && (
                  <Grid item key={'detailedview'} xs={12} sx={{ my: 2 }}>
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
    </Box>
  );
}
