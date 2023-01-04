import { useContext } from 'react';
import { MapContext } from '../../pages/map';

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import PolylineOutlinedIcon from '@mui/icons-material/PolylineOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function MapButtons(){
  const mapContext = useContext(MapContext);
  const {
    drawMode,
    setDrawMode,
    setOpenHelpModal,
  } = mapContext;

  const handleButtonChange = (event: React.MouseEvent<HTMLElement>, selectedOption: 'polygon' | 'polyline' | 'obstacle' | 'none') => {
    setDrawMode(selectedOption);
  };

  const handleHelpButtonClick = () => {
    setOpenHelpModal(true);
  }

  return (
    <div style={{ position: 'absolute', top: '2rem', right: '1rem' }}>
      <ToggleButtonGroup
        orientation='vertical'
        value={drawMode}
        exclusive
        onChange={handleButtonChange}
      >
        <ToggleButton value='polygon' sx={{ backgroundColor: '#424c' }}>
          <Tooltip title='Edit Area' placement='left' arrow>
            <HexagonOutlinedIcon />
          </Tooltip>
        </ToggleButton>
        <ToggleButton value='polyline' sx={{ backgroundColor: '#424c' }}>
          <Tooltip title='Edit Route' placement='left' arrow>
            <PolylineOutlinedIcon />
          </Tooltip>
        </ToggleButton>
        <ToggleButton value='obstacle' sx={{ backgroundColor: '#424c' }}>
          <Tooltip title='Edit Obstacles' placement='left' arrow>
            <DangerousOutlinedIcon />
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>

      <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

      <ToggleButtonGroup
        orientation='vertical'
        exclusive
      >
        <ToggleButton value={1} sx={{ backgroundColor: '#424c' }} onClick={handleHelpButtonClick}>
          <Tooltip title='Help' placement='left' arrow>
            <HelpOutlineIcon />
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}