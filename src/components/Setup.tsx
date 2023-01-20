import { FC } from 'react';

import { Box, Typography, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Setup: FC = () => {

  const navigate = useNavigate()

  const getStarted = () => {
    navigate('/mainfeed')
  }

  return (
    <Box sx={{background: '#1E1E1E', display: 'flex', alignItems: 'center'}} height="100vh">
      <Box px={8}>
        <Typography
          color="#CECDCE" fontFamily='Space Grotesk' fontWeight={400} fontSize={54} py={2}>
          You are all set up
        </Typography>

        <Typography
          color="#CECDCE" fontFamily='Space Grotesk' fontWeight={400} fontSize={24} py={2}>
          Let’s start your first experience.
          Share anything that’s on your mind.
        </Typography>
        <Button
          sx={{width: '380px', height: '60px', background: '#EAEAEA', color: 'black', fontWeight: '700', borderRadius: '4'}}
          style={{textTransform: 'none'}}
          onClick={getStarted}
        >
          <Typography color="black" fontFamily='Space Grotesk' fontWeight={700} fontSize={20}>
            Get Started
          </Typography>
        </Button>

      </Box>
    </Box>
  )
}

export default Setup
