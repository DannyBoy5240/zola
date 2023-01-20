import { FC } from 'react';

import { Grid, Box } from '@mui/material';
import Setup from 'components/Setup';

import backImage from './../assets/images/back-3.png'

const SetupPage: FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Setup />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{display: 'flex'}} height='100vh'>
          <img src={backImage} width='100%' height='100%' alt="Image" />
        </Box>
      </Grid>
    </Grid>
  )
}

export default SetupPage
