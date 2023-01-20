import { FC } from 'react';

import { Box, Typography, Button, ListItem, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import googleIcon from './../assets/icons/google.svg'

const SignUp: FC = () => {

  const navigate = useNavigate()

  const getStarted = () => {
    navigate('/payment')
  }

  return (
    <Box sx=
      {{background: '#18191A', display: 'flex', alignItems: 'center', height: {xs:'100%', md:'100vh'}}}>
      <Box px={{xs: 5, md: 10}}>
        <Typography
          color="#CECDCE" fontFamily='Space Grotesk' fontWeight={400} fontSize={54} lineHeight='72px' py={2}
        >
          Sign Up.
        </Typography>

        <Typography
          color="#CECDCE" fontFamily='Space Grotesk' fontWeight={400} fontSize={24} lineHeight='36px' py={2}
        >
          Let’s get you started.
        </Typography>
        <Button
          sx={{
            width: '379px', height: '60px', background: '#373A3F', color: '#CECDCE',
            fontWeight: '700', borderRadius: '4px'
          }}
          style={{textTransform: 'none'}}
        >
          <img src={googleIcon} width='25px' height='25px' />
          <Typography color="#CECDCE" fontFamily='Source Sans Pro' fontWeight={600} fontSize={20} px={1}>
            Continue with Google
          </Typography>
        </Button>

        <Typography color="#CECDCE" fontFamily='Space Grotesk' fontWeight={400} fontSize={24} pt={4} pb={2}>
          <ListItem sx={{ display: 'list-item' }}>
            OR
          </ListItem>
        </Typography>

        <Typography
          color="#CECDCE" fontFamily='Space Grotesk' fontWeight={400} fontSize={16} py={1}>
          Email
        </Typography>
        <Button
          sx={{width: '380px', height: '60px', background: '#1E1E1E', color: '#CECDCE', fontWeight: '700'}}
          style={{textTransform: 'none'}}
        >
          Your email
        </Button>

        <Typography
          color="#CECDCE" fontFamily='Space Grotesk' fontWeight={400} fontSize={16} py={1}
        >
          Password
        </Typography>
        <Button
          sx={{width: '380px', height: '60px', background: '#1E1E1E', color: '#CECDCE', fontWeight: '700'}}
          style={{textTransform: 'none'}}
        >
          Enter Password
        </Button>

        <Box mt={2}>
          <Button
            sx={{width: '379px', height: '60px', background: '#EAEAEA', color: 'black', fontWeight: '700', borderRadius: '4px'}}
            style={{textTransform: 'none'}}
            onClick={getStarted}
          >
            <Typography color="black" fontWeight={700} fontSize={20}>
              Get Started
            </Typography>
          </Button>
        </Box>

      </Box>
    </Box>
  )
}

export default SignUp
