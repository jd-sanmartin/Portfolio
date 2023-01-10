import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import DeleteIcon from '@mui/icons-material/Delete';

import CoordinateListItemProps from '../../types/map/CoordinatesListItemProps';

export default function CoordinatesListItem(props: CoordinateListItemProps) {
  const { index, name, coordinates, deleteAction } = props;
  const { lat, lng, alt } = coordinates;

  return (
    <Card
      sx={{
        borderBottom: 1,
        backgroundColor: 'background.paper',
        borderRadius: 0,
        position: 'relative',
        borderColor: '#777',
      }}
    >
      <div style={{position: 'absolute', right: 10, top: 10}}>
        {
          deleteAction !== undefined && (
            <Tooltip title='Delete Point' placement='top' arrow>
              <IconButton component='label' onClick={() => deleteAction(index)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )
        }
        
      </div>
      <CardContent>
        <Typography variant='h5'>
          {name}
        </Typography>

        <Typography variant='body2'>
          LAT: {lat}
        </Typography>
        
        <Typography variant='body2'>
          LNG: {lng}
        </Typography>
        
        {
          alt !== undefined ? (
            <Typography variant='body2'>
              ALT: {alt}m
            </Typography>
          ) : null
        }
      </CardContent>
    </Card>
  );
}