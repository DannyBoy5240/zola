import { FC } from 'react';

import { Grid, Box } from '@mui/material';
import SignUp from 'components/SignUp';

import backImage from './../assets/images/back-1.png'

const SignUpPage: FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <SignUp />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{display: 'flex'}} height='100vh'>
          <img src={backImage} width='100%' height='100%' alt="Image" />
        </Box>
      </Grid>
    </Grid>
  )
}

export default SignUpPage
