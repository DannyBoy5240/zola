import { FC } from 'react';

import { Box } from '@mui/material';
import ChatBox from './ChatBox';
import SearchBox from './SearchBox';
import ChatItem from './ChatItem';

const ChatBoard: FC = () => {
  return (
    <Box sx={{background: '#27292D', alignItems: 'center'}} height="100vh" width="100vw">
      <Box sx={{display: 'flex'}} justifyContent='right' p={5}>
        <SearchBox />
      </Box>

      <Box sx={{width: '60%'}} px={10}>
        <ChatItem user="Alex" time="27mins ago" content="We used to be really close, but lately it seems like we can't have a conversation without it turning into a fight. Not sure what's changed."/>
        <ChatItem user="Alex" time="27mins ago" content="We used to be really close, but lately it seems like we can't have a conversation without it turning into a fight. Not sure what's changed."/>
        <ChatItem user="Alex" time="27mins ago" content="We used to be really close, but lately it seems like we can't have a conversation without it turning into a fight. Not sure what's changed."/>
      </Box>

      <Box sx={{width: '60%'}} px={10}>
        <ChatBox />
      </Box>

    </Box>
  )
}

export default ChatBoard
