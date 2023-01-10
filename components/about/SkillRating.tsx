import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

interface props {
  level: number;
}

export default function SkillRating({level}: props) {
  return (
    <Rating
      value={level}
      getLabelText={(value: number) => `${value} / 5`}
      precision={0.5}
      icon={<CircleIcon fontSize='inherit' />}
      emptyIcon={<CircleOutlinedIcon fontSize='inherit' />}
      readOnly
      sx={{
        fontSize: '1rem',
        '& .MuiRating-iconFilled': {
          color: 'text.primary',
        },
      }}
    />
  );
};
