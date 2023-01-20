import { FC } from 'react';

import { Box, Typography, ListItemButton, ListItemText } from '@mui/material';

import AddCommentIcon from '@mui/icons-material/AddComment';
import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBar: FC = () => {

  return (
    <Box
      sx={{
        background: '#18191A', display: 'flex', alignItems: 'center',
        width: {xs: '100%', md:'260px'}, height: {xs: "100px", md: '100vh'}
      }}
      justifyContent='center'
    >
      <Box justifyContent="center"
        sx={{
          display: 'flex', flexDirection: {sx: 'row', md: 'column'}
        }}>
        <Box pb={2}>
          <Typography color="white" fontWeight={400} fontSize={40}>
            Zola.
          </Typography>
        </Box>

        <Box>
          <ListItemButton component="a" href="/">
            <AddCommentIcon sx={{color: 'white', fontSize: '16px'}}/>
            <ListItemText primary="New Chat" sx={{fontSize: '16px', color: 'white', paddingLeft: '10px'}} />
          </ListItemButton>

          <ListItemButton component="a" href="/">
            <DeleteIcon sx={{color: 'white', fontSize: '16px'}}/>
            <ListItemText primary="Clear Chat" sx={{fontSize: '16px', color: 'white', paddingLeft: '10px'}} />
          </ListItemButton>
        </Box>

        <Box py={20} />

        <Box>
          <ListItemButton component="a" href="/">
            <MailIcon sx={{color: 'white', fontSize: '16px'}}/>
            <ListItemText primary="Contact Us" sx={{fontSize: '16px', color: 'white', paddingLeft: '10px'}} />
          </ListItemButton>

          <ListItemButton component="a" href="/">
            <LogoutIcon sx={{color: 'white', fontSize: '16px'}}/>
            <ListItemText primary="Log Out" sx={{fontSize: '16px', color: 'white', paddingLeft: '10px'}} />
          </ListItemButton>
        </Box>

      </Box>
    </Box>
  )
}

export default SideBar
