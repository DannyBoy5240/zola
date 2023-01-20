import { FC } from 'react';

import { Box } from '@mui/material';
import ChatItem from './ChatItem';

const ChatHistory: FC = () => {
  return (
    <Box
      sx={{
        background: '#27292D', display: 'flex', alignItems: 'center', height: {xs: '100%', md: '100vh'}
      }}
      px={3}
    >
      <Box>
        <ChatItem user="Alex" time="27mins ago" content="We used to be really close, but lately it seems like we can't have a conversation without it turning into a fight. Not sure what's changed."/>
        <ChatItem user="Clara" time="27mins ago" content="We used to be really close, but lately it seems like we can't have a conversation without it turning into a fight. Not sure what's changed."/>
        <ChatItem user="Alex" time="27mins ago" content="We used to be really close, but lately it seems like we can't have a conversation without it turning into a fight. Not sure what's changed."/>
        <ChatItem user="Clara" time="27mins ago" content="We used to be really close, but lately it seems like we can't have a conversation without it turning into a fight. Not sure what's changed."/>
      </Box>
    </Box>
  )
}

export default ChatHistory
