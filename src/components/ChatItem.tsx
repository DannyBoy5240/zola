import { FC } from 'react';

import { Box, Avatar, Typography } from '@mui/material';

import avatarImage from './../assets/images/avatar-1.png'

type ChatItemProps = {
  user?: string,
  time?: string,
  content?: string
}

const ChatItem: FC<ChatItemProps> = ({user='', time='', content=''}) => {
  return (
    <Box sx={{display: 'flex'}} px={2} py={3}>
      <Avatar
        alt="Alex"
        sx={{width: 64, height: 64}}
        src={avatarImage} />
      <Box px={3}>
          <Typography color={'white'} fontSize={16}pb={3}>
            {user} {time}
          </Typography>
          <Typography color={'white'} fontSize={16}>
            {content}
          </Typography>
      </Box>
    </Box>
  )
}

export default ChatItem
