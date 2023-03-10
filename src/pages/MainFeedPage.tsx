import { FC } from 'react';

import { Box } from '@mui/material';
import SideBar from 'components/SideBar';
import ChatBoard from 'components/ChatBoard';

const MainFeedPage: FC = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: {xs:'column', md:'row'}}}>
      <SideBar />
      <ChatBoard />
    </Box>
  )
}

export default MainFeedPage
