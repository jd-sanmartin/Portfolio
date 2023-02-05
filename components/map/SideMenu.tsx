import { useState, useEffect } from 'react';

import { useMap } from '../../utils/map/MapContext';

import { useTheme } from "@mui/material";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import PolylineOutlinedIcon from '@mui/icons-material/PolylineOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';

import CoordinatesListItem from './CoordinatesListItem';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;

  tabMode: 'polygon' | 'polyline' | 'obstacle' | 'none';
  currentTabMode: 'polygon' | 'polyline' | 'obstacle' | 'none';
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, tabMode, currentTabMode, ...other } = props;

  return (
    <Box
      role='tabpanel'
      hidden={tabMode !== currentTabMode}
      id={`tabpanel-${index}`}
      sx={{
        height: '100%',
        maxHeight: 'calc(100% - 70px)',
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
      }}
      {...other}
    >
      {tabMode === currentTabMode && (
        <Box>
          {children}
        </Box>
      )}
    </Box>
  );
}

const drawModes: ('polygon' | 'polyline' | 'obstacle' | 'none')[]  = ['polygon', 'polyline', 'obstacle', 'none'];
export default function SideMenu() {
  const theme = useTheme();
  const mapContext = useMap();
  const {
    polygonCoordinates,
    polylineCoordinates,
    obstacleCoordinates,

    drawMode,
    setDrawMode,

    deletePolygonCoordinatesAt,
    deletePolylineCoordinatesAt,
    deleteObstacleCoordinatesAt,
  } = mapContext;

  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    setTabValue(drawModes.indexOf(drawMode));
  }, [drawMode])

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setDrawMode(drawModes[newValue]);
  };

  return (
    <>
      <Box sx={{ width: '100%', backgroundColor: 'background.paper', height: '100%', }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tabValue}
            variant= 'fullWidth'
            onChange={handleTabChange}
          >
            <Tab icon={<HexagonOutlinedIcon sx={{fontSize: '1.2rem'}} />} label='Area' sx={{ fontSize: '0.7rem' }} />
            <Tab icon={<PolylineOutlinedIcon sx={{fontSize: '1.2rem'}} />} label='Route' sx={{ fontSize: '0.7rem' }} />
            <Tab icon={<DangerousOutlinedIcon sx={{fontSize: '1.2rem'}} />} label='Obstacles' sx={{ fontSize: '0.7rem' }} />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0} tabMode={'polygon'} currentTabMode={drawMode}>
          {
            polygonCoordinates.map((coord, i) => (
              <div key={`polygon-coord-acc-${i}`}>
                <CoordinatesListItem
                  index={i}
                  name={`Point ${i + 1}`}
                  coordinates={coord}
                  deleteAction={deletePolygonCoordinatesAt}
                />
              </div>
            ))
          }
        </TabPanel>
        <TabPanel value={tabValue} index={1} tabMode={'polyline'} currentTabMode={drawMode}>
          {
            polylineCoordinates.map((coord, i) => (
              <div key={`polygon-coord-acc-${i}`}>
                <CoordinatesListItem
                  index={i}
                  name={`Route Point ${i + 1}`}
                  coordinates={coord}
                  deleteAction={deletePolylineCoordinatesAt}
                />
              </div>
            ))
          }
        </TabPanel>
        <TabPanel value={tabValue} index={2} tabMode={'obstacle'} currentTabMode={drawMode}>
          {
            obstacleCoordinates.map((coord, i) => (
              <div key={`obstacle-coord-acc-${i}`}>
                <CoordinatesListItem
                  index={i}
                  name={`Obstacle ${i + 1}`}
                  coordinates={coord}
                  deleteAction={deleteObstacleCoordinatesAt}
                />
              </div>
            ))
          }
        </TabPanel>
      </Box>
    </>
  )
}
