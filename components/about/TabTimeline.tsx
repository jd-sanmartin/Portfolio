import Link from 'next/link';

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import LaunchIcon from '@mui/icons-material/Launch';

import {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function TabTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color='textSecondary'>
          <Typography>
            04/2019
          </Typography>
          <Typography>
            06/2022
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ pb: '12px', px: 2 }}>
          <Typography color='text.primary' fontWeight='bold' variant='h5' component='span'>
            Newsoft S.A.S
          </Typography>
          <Typography color='text.primary' variant='subtitle2' mb={0.5}>
            Middle Consultant
          </Typography>
          <Typography color='text.primary' mb={1}>
            <span style={{fontWeight: 'bold'}}>Technologies used:</span> Javascript, HTML, C#, ASP.NET MVC 5, Python 
          </Typography>

          <Typography color='text.primary'>
            <span style={{fontWeight: 'bold'}}>Projects:</span> <Link href='https://votix.com/' target='_blank' style={{textDecoration: 'underline'}}>Votix<LaunchIcon sx={{ fontSize: 14 }} /></Link> (Drone Fleet Management and Automation)
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='textSecondary'>
          <Typography>
            07/2019
          </Typography>
          <Typography>
            10/2022
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ pb: '12px', px: 2 }}>
          <Typography color='text.primary' variant='h5' fontWeight='bold' component='span'>
            Astound Commerce
          </Typography>
          <Typography color='text.primary' variant='subtitle2' mb={0.5}>
            Web Developer
          </Typography>
          <Typography color='text.primary'>
            <span style={{fontWeight: 'bold'}}>Technologies used:</span> Salesforce Commerce Cloud, Javascript, Node Js, Typescript 
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}