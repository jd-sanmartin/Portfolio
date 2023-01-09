import Image from 'next/image';

import { ElementType } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import SearchIcon from '@mui/icons-material/Search';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TvIcon from '@mui/icons-material/Tv';
import ListIcon from '@mui/icons-material/List';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';



const settingsGroup1 = [
  { icon: <SearchIcon />, label: 'Discover' },
  { icon: <PlaylistPlayIcon />, label: 'Playlist' },
  { icon: <LiveTvIcon />, label: 'Movie' },
  { icon: <MusicNoteIcon />, label: 'Music' },
  { icon: <TvIcon />, label: 'TV Shows' },
  { icon: <ListIcon />, label: 'My List' },
];

const settingsGroup2 = [
  { icon: <WatchLaterIcon />, label: 'Watch Later' },
  { icon: <FavoriteIcon />, label: 'Recommended' },
];

const settingsGroup3 = [
  { icon: <SettingsIcon />, label: 'Settings' },
  { icon: <LogoutIcon />, label: 'Logout' },
];

const CustomNav = styled(List)<{ component?: ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function SideBar() {
  return (
    <Box>
      <Paper elevation={0} sx={{width: '100%', height: '100vh', maxHeight: '100%', overflow: 'auto', borderRadius: 0}}>
        <CustomNav>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            py: 2
          }}>
            <Box sx={{ height: 90, width: 90, mb: 1}}>
              <Image src='/images/movies/man.jpg' height='200' width='150' alt='DP' style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </Box>
            <Typography variant='h5' textAlign='center'>Eric Hoffman</Typography>
          </Box>
          
          <Divider />

          <Box sx={{ my: 1 }}>
            {settingsGroup1.map((item, i) => (
              <ListItemButton
                key={item.label}
                sx={{ py: 0, minHeight: 32 }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: 14, fontWeight: i === 0 ? 'bold' : 'light' }}
                />
              </ListItemButton>
            ))}
          </Box>

          <Divider />

          <Box sx={{ my: 1 }}>
            {settingsGroup2.map((item) => (
              <ListItemButton
                key={item.label}
                sx={{ py: 0, minHeight: 32, }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                />
              </ListItemButton>
            ))}
          </Box>

          <Divider />

          <Box sx={{ my: 1 }}>
            {settingsGroup3.map((item) => (
              <ListItemButton
                key={item.label}
                sx={{ py: 0, minHeight: 32, }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                />
              </ListItemButton>
            ))}
          </Box>

        </CustomNav>
      </Paper>
    </Box>
  );
}