import { FC } from 'react';

import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Payment: FC = () => {

  const navigate = useNavigate()

  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));

  const gotoSetup = () => {
    navigate('/setup')
  }

  return (
    <Box sx={{background: '#1E1E1E', display: 'flex', alignItems: 'center'}} height="100vh">
     <Box px={{xs: 8, md: 5}}>

      <Typography color="#CECDCE" fontFamily='Space Grotesk' fontWeight={400} fontSize={54} py={2}>
        Start free trial
      </Typography>
      <Typography color="#CECDCE" fontFamily='Space Grotesk' fontWeight={400} fontSize={24} py={2}>
        Operating Zola is expensive, and we need your support to keep it running.
      </Typography>

      <Box sx={{display: 'flex', flexDirection: isMobile?'column':'row'}}>
        <Button
          sx={{width: '260px', height: '60px', background: '#EAEAEA', color: 'black', fontWeight: '700'}}
          style={{textTransform: 'none'}}
          onClick={gotoSetup}
        >
          <Typography color="black" fontFamily='Space Grotesk' fontWeight={700} fontSize={20}>
            $12/mo
          </Typography>
        </Button>
        <Typography color="#CECDCE" fontFamily='Space Grotesk' fontWeight={400} fontSize={20} p={2}>
          or
        </Typography>
        <Button
          sx={{
            width: '260px', height: '60px', background: '#1E1E1E', color: '#CECDCE', fontWeight: '700',
            border: 1
          }}
          style={{textTransform: 'none'}}
          onClick={gotoSetup}>
            <Typography color="#CECDCE" fontFamily='Space Grotesk' fontWeight={700} fontSize={20}>
              $100/year
            </Typography>
        </Button>
      </Box>

      <Typography color="#CECDCE" fontFamily='Space Grotesk' fontWeight={400} fontSize={24} py={2}>
        3 days free. Cancel anytime.
      </Typography>
     </Box>
    </Box>
  )
}

export default Payment
