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
    <Box sx={{background: '#1E1E1E', display: 'flex', alignItems: 'center'}} height="100vh">
      <Box px={10}>
        <Typography color="white" fontWeight={400} fontSize={54} py={2}>
          Sign Up.
        </Typography>

        <Typography color="white" fontWeight={400} fontSize={24} py={2}>
          Let’s get you started.
        </Typography>
        <Button
          sx={{width: '380px', height: '60px', background: '#373A3F', color: '#CECDCE', fontWeight: '700', borderRadius: '4px'}}
          style={{textTransform: 'none'}}
        >
          <img src={googleIcon} width='25px' height='25px' />
          <Typography color="white" fontWeight={600} fontSize={20} px={2}>
            Continue with Google
          </Typography>
        </Button>

        <Typography color="white" fontWeight={400} fontSize={24} pt={6} pb={3}>
          <ListItem sx={{ display: 'list-item' }}>
            OR
          </ListItem>
        </Typography>

        <Typography color="white" fontWeight={400} fontSize={16} py={2}>
          Email
        </Typography>
        <TextField label="Your email" variant="outlined"
          style={{color: 'white'}}
        />
        <Button
          sx={{width: '380px', height: '60px', background: '#1E1E1E', color: '#CECDCE', fontWeight: '700'}}
          style={{textTransform: 'none'}}
        >
          Your email
        </Button>

        <Typography color="white" fontWeight={400} fontSize={16} py={2}>
          Password
        </Typography>
        <Button
          sx={{width: '380px', height: '60px', background: '#1E1E1E', color: '#CECDCE', fontWeight: '700'}}
          style={{textTransform: 'none'}}
        >
          Enter Password
        </Button>

        <Button
          sx={{width: '380px', height: '60px', background: '#EAEAEA', color: 'black', fontWeight: '700', borderRadius: '4px'}}
          style={{textTransform: 'none'}}
          onClick={getStarted}
        >
           <Typography color="black" fontWeight={700} fontSize={20}>
             Get Started
           </Typography>
        </Button>

      </Box>
    </Box>
  )
}

export default SignUp
