import { useMap } from '../../utils/map/MapContext';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import PolylineOutlinedIcon from '@mui/icons-material/PolylineOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: 'calc(100vw - 30px)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  pb: 3,
  px: 4,
  maxHeight: 'calc(100vh - 100px)',
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
};

export default function HelpModal() {
    const mapContext = useMap();
    const { openHelpModal, setOpenHelpModal } = mapContext;

    return (
      <Modal
        open={openHelpModal}
        onClose={() => setOpenHelpModal(!openHelpModal)}
      >
        <Box sx={style}>
          <Typography color='text.primary' variant='h5' fontWeight='bold' mb={1}>
            Instructions
          </Typography>
          <Typography color='text.primary' variant='body1' mb={0.8}>
            <HexagonOutlinedIcon /> Click this button to enter <b>Area Mode</b>, in this mode you can draw a polygon.
          </Typography>
          <Typography color='text.primary' variant='body1' mb={0.8}>
            <PolylineOutlinedIcon /> Click this button to enter <b>Route Mode</b>, in this mode you can draw a line inside a polygon.
          </Typography>
          <Typography color='text.primary' variant='body1' mb={0.8}>
            <DangerousOutlinedIcon /> Click this button to enter <b>Obstacle Mode</b>, in this mode you can mark dangerous spots inside a polygon.
          </Typography>
        </Box>
      </Modal>
    );
}