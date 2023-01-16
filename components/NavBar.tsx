import Link from 'next/link';
import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import { useTheme } from '@mui/material/styles';

interface ButtonLinkProps {
  displayText: string;
  route: string;
}

const pages: ButtonLinkProps[] = [
  { displayText: 'About me', route: '/about'},
  { displayText: 'Samples', route: '/samples'},
];

interface props {
  isDarkTheme: boolean;
  toggleTheme(): void;
}

export default function NavBar({ isDarkTheme, toggleTheme }: props) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();

  return (
    <AppBar position="sticky" sx={{ top:0, backgroundColor: 'primary.main' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href='/'>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', sm: 'flex' },
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
              >
              Juan David
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                  display: { xs: 'block', sm: 'none' },
                  zIndex: 10000
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.displayText} onClick={handleCloseNavMenu}>
                  <Link href={page.route}>
                    <Typography textAlign="center">{page.displayText}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link href='/'>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 1,
                display: { xs: 'flex', sm: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Juan David
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            {pages.map((page) => (
              <div key={page.displayText}>
                <Link href={page.route}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.displayText}
                  </Button>
                </Link>
              </div>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', gap: '1rem' }}>
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
              href='https://github.com/jd-sanmartin/Portfolio'
              style={{
                fontSize: 40
              }} 
            >
              <Tooltip title='View source code' placement='top' arrow>  
                <GitHubIcon fontSize='inherit' />
              </Tooltip>
            </Link>

            <IconButton onClick={toggleTheme} sx={{ fontSize: 28, color: 'text.primary' }}>
              {
                isDarkTheme ?
                  ( <LightModeOutlinedIcon sx={{ fontSize: 'inherit', color: 'text.primary' }} /> ) :
                  ( <DarkModeOutlinedIcon sx={{ fontSize: 'inherit', color: 'white' }} /> )
              }
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
