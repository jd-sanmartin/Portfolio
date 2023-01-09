import { useState } from "react";
import { useWidth } from "../../hooks/useWidth";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

interface props {
  handleTextBoxChange(substring: string): void;
  openSideBar(): void;
}

export default function SearchBar ({ handleTextBoxChange, openSideBar }: props) {
  const handleTBChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    handleTextBoxChange(e.target.value);
  }

  const handleMenuButtonClick = () => openSideBar();
  const width = useWidth();
  
  return (
    <Box sx={{ width: '100%', position: { xs: 'relative', md: 'sticky' }, top: 0, px: 3, zIndex: 9999 }}>
      <Paper sx={{ display: 'flex', justifyContent: 'flex-start', px: 1, py: 2, gap: 1, }}>
        <IconButton onClick={handleMenuButtonClick} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>

        <TextField
          variant='outlined'
          label='Search'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
          sx={{ borderRadius: '40rem', flexGrow: { xs: 1, sm: 0 } }}
          onChange={handleTBChange}
        />
      </Paper>
    </Box>
  );
}
