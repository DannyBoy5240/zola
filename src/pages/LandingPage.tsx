import { FC } from 'react';

import { Grid, Box } from '@mui/material';
import Introduction from 'components/Introduction';
import ChatHistory from 'components/ChatHistory';

const LandingPage: FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Introduction />
      </Grid>
      <Grid item xs={12} md={6}>
        <ChatHistory />
      </Grid>
    </Grid>
  )
}

export default LandingPage
