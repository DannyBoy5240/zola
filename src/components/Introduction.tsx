import { FC } from 'react';

import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Introduction: FC = () => {

  const navigate = useNavigate()

  const earlyAccess = () => {
    navigate('/signup')
  }

  return (
    <Box sx={{background: '#1E1E1E', display: 'flex', alignItems: 'center', height: {xs: '100%', md: '100vh'}}}>
     <Box px={{xs: 3, md: 6}}>

      <Typography
        color="#CECDCE" fontFamily={'Space Grotesk'} fontWeight={400} fontSize={54}
        lineHeight='72px' py={2}>
        Meet Zola. A new tool for self-discovery.
      </Typography>

      <Typography
        color="#CECDCE" fontFamily={'Space Grotesk'} fontWeight={400} fontSize={24}
        lineHeight='36px' py={2}>
        Our AI understands and guides you through a journey of exploration to uncover your innermost beliefs and unlock your true potential.
      </Typography>

      <Button
        sx={{
          width: '320px', height: '80px', background: '#EAEAEA', color: 'black',
          fontWeight: '700', borderRadius: '12px', border: '1px solid rgba(206, 205, 206, 0.6)'
        }}
        style={{textTransform: 'none'}}
        onClick={earlyAccess}>
        <Typography color="black" fontFamily={'Space Grotesk'} fontWeight={700} fontSize={20}>
          Get Early Access
        </Typography>
      </Button>

     </Box>
    </Box>
  )
}

export default Introduction
