import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'white',
  },
  '& .MuiRating-iconHover': {
    color: 'white',
  },
});

interface props {
  level: number;
}

export default function SkillRating({level}: props) {
  return (
    <StyledRating
      value={level}
      getLabelText={(value: number) => `${value} / 5`}
      precision={0.5}
      sx={{fontSize: '1rem'}}
      icon={<CircleIcon fontSize='inherit' />}
      emptyIcon={<CircleOutlinedIcon fontSize='inherit' />}
      readOnly
    />
  );
};
