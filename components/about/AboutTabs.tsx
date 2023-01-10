import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import TabBio from './TabBio';
import TabSkills from './TabSkills';

import TabPanelProps from '../../types/about/TabPanelProps';
import TabTimeline from './TabTimeline';

interface SectionProps {
  name: string;
  displayName: string;
}

const sections : SectionProps[] = [
  { name: 'bio', displayName: 'Bio' },
  { name: 'skills', displayName: 'Skills' },
  { name: 'timeline', displayName: 'Timeline' },
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      {...other}
      sx={{
        width: '100%',
        overflow: 'auto',
        overflowX: 'hidden',
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
    >
      {value === index && (
        <Box sx={{ p: 2, width: '100%' }}>
          {children}
        </Box>
      )}
    </Box>
  );
}

export default function AboutTabs() {
  const [value, setValue] = useState(0);
  let theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        height: 'calc(100vh - 64px)',
        width: '100%'
      }}
    >
      <Tabs
        orientation = 'vertical'
        variant='fullWidth'
        value={value}
        onChange={handleChange}
        sx={{ minWidth: '8rem' }}
      >
        {sections.map((x, i) => (
          <Tab key={`about-tab-${x.name}`} label={x.displayName} />
        ))}
      </Tabs>

      <TabPanel value={value} index={0}>
        <TabBio />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <TabSkills />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabTimeline />
      </TabPanel>
    </Box>
  );
}