import Link from 'next/link';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import SampleCardProps from '../../types/samples/SampleCardProps';

export default function SampleCard(props: SampleCardProps) {
  const { name, text, accentColor, technologiesUsed, link } = props;

  return (
    <Box sx={{ position: 'relative', }}>
      <Box sx={
        {
          height: '100%',
          width: '8px',
          backgroundColor: accentColor || '#4e2453',
          boxShadow: `0px 0px 6px 2px ${accentColor || '#4e2453'}`,
          position: 'absolute',
        }
      }></Box>
      
      <Card
        variant='outlined'
        elevation={3}
        sx={{
          borderLeft: 0,
          borderRadius: '0',
          ml: '5px',
        }}
      >
        <CardContent>
          <Typography variant='h5' fontWeight='bold'>
            {name}
          </Typography>

          {
            typeof text === 'string' ? (
              <Typography fontSize={17}>
                {text}
              </Typography>
            ) :
            (
              text.map((x, i) => (
                <Typography key={`sample-${name}-text-p-${i}`} fontSize={17} mb={1} >
                  {x}
                </Typography>
              ))
            )
          }

          <Typography sx={{ fontSize: 16, mt: 1 }}>
            <span style={{fontWeight: 'bold'}}>Technologies Used:</span> {technologiesUsed}
          </Typography>

          <Link href={link} style={{ color: accentColor }}>
            <Button color='inherit' sx={{ p: 0, mt: 1 }}>Check it out</Button>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}