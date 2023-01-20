import { FC } from 'react';

import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Introduction: FC = () => {

  const navigate = useNavigate()

  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));

  const earlyAccess = () => {
    navigate('/signup')
  }

  return (
    <Box sx={{background: '#1E1E1E', display: 'flex', alignItems: 'center', height: {xs: '100%', md: '100vh'}}}>
     <Box px={isMobile?3:6}>
      <Typography color="white" fontWeight={400} fontSize={54} py={2}>
        Meet Zola. A new tool for self-discovery.
      </Typography>
      <Typography color="white" fontWeight={400} fontSize={24} py={3}>
        Our AI understands and guides you through a journey of exploration to uncover your innermost beliefs and unlock your true potential.
      </Typography>
      <Button
        sx={{width: '320px', height: '80px', background: '#EAEAEA', color: 'black', fontWeight: '700', borderRadius: '12px'}}
        style={{textTransform: 'none'}}
        onClick={earlyAccess}>
        <Typography color="black" fontWeight={700} fontSize={20}>
          Get Early Access
        </Typography>
      </Button>
     </Box>
    </Box>
  )
}

export default Introduction
