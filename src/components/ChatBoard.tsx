import { FC } from 'react';

import { Box } from '@mui/material';
import ChatBox from './ChatBox';
import SearchBox from './SearchBox';
import ChatItem from './ChatItem';

const ChatBoard: FC = () => {

  return (
    <Box sx={{background: '#27292D', alignItems: 'center'}} height="100vh" width="100vw">
      <Box>
        <Box sx={{display: 'flex'}} justifyContent='right' m={{xs: 5, md: 2}}>
          <SearchBox />
        </Box>

        <Box
          sx={{width: {xs: '90%', md: '60%'}}}
          px={{xs: 2, md: 10}}
        >
          <ChatItem user="Alex" time="27mins ago" content="We used to be really close, but lately it seems like we can't have a conversation without it turning into a fight. Not sure what's changed."/>
          <ChatItem user="Alex" time="27mins ago" content="We used to be really close, but lately it seems like we can't have a conversation without it turning into a fight. Not sure what's changed."/>
          <ChatItem user="Alex" time="27mins ago" content="We used to be really close, but lately it seems like we can't have a conversation without it turning into a fight. Not sure what's changed."/>
        </Box>

        <Box
          sx={{width: {xs: '90%', md: '60%'}}}
          px={{xs: 2, md: 10}}
        >
          <ChatBox />
        </Box>
      </Box>

    </Box>
  )
}

export default ChatBoard
