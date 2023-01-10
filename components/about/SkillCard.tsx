import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import SkillRating from './SkillRating';

import SkillAccordeonProps from '../../types/about/SkillCardProps';

export default function SkillCard(props: SkillAccordeonProps) {
  const { skillName, experience, skillLevel, details, accentColor } = props;

  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Box sx={{ position: 'relative', }}>
      <Box sx={
        {
          height: '100%',
          width: '8px',
          backgroundColor: accentColor || '#4e2453',
          boxShadow: `0px 0px 9px 2px ${accentColor || '#4e2453'}`,
          position: 'absolute'
        }
      }></Box>
      
      <Card
        variant='outlined'
        sx={{
          borderLeft: 0,
          cursor: details ? 'pointer' : 'auto',
          borderRadius: '0',
          ml: '5px'
        }}
        onClick={handleClick}
      >
        <CardContent>
          <Typography variant='h5'>
            {skillName}
          </Typography>

          <SkillRating level={skillLevel} />

          <Typography sx={{ fontSize: 14, mb: 1 }}>
              <span style={{fontWeight: 'bold'}}>Experience:</span> {experience}
          </Typography>
          
          { 
            details && 
              (expanded ?
                (
                  <Typography variant='body2'>
                    {details}
                  </Typography>
                )
                : 
                (
                  <Typography variant='subtitle2' color={accentColor}>
                    See more
                  </Typography>
                )
              )
          }
        </CardContent>
      </Card>
    </Box>
  );
}