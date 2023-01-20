import { FC } from 'react';

import { Grid, Box } from '@mui/material';
import Payment from 'components/Payment';

import backImage from './../assets/images/back-2.png'

const PaymentPage: FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Payment />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{display: 'flex'}} height='100vh'>
          <img src={backImage} width='100%' height='100%' alt="Image" />
        </Box>
      </Grid>
    </Grid>
  )
}

export default PaymentPage
