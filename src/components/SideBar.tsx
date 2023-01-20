import { FC } from 'react';

import { Box, Typography, ListItemButton, ListItemText } from '@mui/material';

import newChatIcon from './../assets/icons/newchat.svg'
import clearChatIcon from './../assets/icons/clearchat.svg'
import contactUsIcon from './../assets/icons/contactus.svg'
import logOutIcon from './../assets/icons/logout.svg'

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
          <Typography
            color="#CECDCE" fontFamily='Space Grotesk' fontWeight={400} fontSize={40}>
            Zola.
          </Typography>
        </Box>

        <Box>
          <ListItemButton component="a" href="/">
            <img src={newChatIcon} width='15px' height='15px' />
            <ListItemText primary="New Chat" sx={{fontFamily: 'Space Grotesk', fontSize: '16px', color: 'white', paddingLeft: '10px'}} />
          </ListItemButton>

          <ListItemButton component="a" href="/">
            <img src={clearChatIcon} width='15px' height='15px' />
            <ListItemText primary="Clear Chat" sx={{fontFamily: 'Space Grotesk', fontSize: '16px', color: 'white', paddingLeft: '10px'}} />
          </ListItemButton>
        </Box>

        <Box py={20} />

        <Box>
          <ListItemButton component="a" href="/">
            <img src={contactUsIcon} width='15px' height='15px' />
            <ListItemText primary="Contact Us" sx={{fontFamily: 'Space Grotesk', fontSize: '16px', color: 'white', paddingLeft: '10px'}} />
          </ListItemButton>

          <ListItemButton component="a" href="/">
            <img src={logOutIcon} width='15px' height='15px' />
            <ListItemText primary="Log Out" sx={{fontFamily: 'Space Grotesk', fontSize: '16px', color: 'white', paddingLeft: '10px'}} />
          </ListItemButton>
        </Box>

      </Box>
    </Box>
  )
}

export default SideBar
