import Grid from '@mui/material/Grid';

import SkillCard from './SkillCard';

import SkillsData from '../../data/SkillsData';

const compareFn = (a: number, b: number): number => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

export default function TabSkills() {
  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      {
        SkillsData.sort((a,b) => compareFn(a.skillLevel, b.skillLevel)).map((skill, i) => (
          <Grid item key={`skill-card-${i}`} xs={6} sm={6} md={4} lg={3}>
            <SkillCard {...skill} />
          </Grid>
        ))
      }
    </Grid>
  )
}
