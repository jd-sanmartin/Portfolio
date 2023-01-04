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

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  orientation: 'horizontal' | 'vertical';
  variant: 'fullWidth' | 'scrollable';
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#524269',
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));

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
      <StyledTabs
        orientation = 'vertical'
        variant='fullWidth'
        value={value}
        onChange={handleChange}
        sx={{ minWidth: '8rem' }}
      >
        {sections.map((x, i) => (
          <StyledTab key={`about-tab-${x.name}`} label={x.displayName} />
        ))}
      </StyledTabs>

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