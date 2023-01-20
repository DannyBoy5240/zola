import { FC } from 'react';

import { Box, Avatar, Typography } from '@mui/material';

import avatarImage1 from './../assets/images/avatar-1.png'
import avatarImage2 from './../assets/images/avatar-2.png'

type ChatItemProps = {
  user?: string,
  time?: string,
  content?: string
}

const ChatItem: FC<ChatItemProps> = ({user='', time='', content=''}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        "&:hover": {
          borderLeft: "4px solid #CECDCE",
          backgroundColor: '#474B52'
        },
      }}
      p={2}
    >
      <Avatar
        alt="Alex"
        sx={{width: 64, height: 64}}
        src={user==='Alex'?avatarImage1:avatarImage2} />
      <Box px={3}>
          <Typography color={'#CECDCE'} fontFamily={'Space Grotesk'} fontSize={16}
            fontWeight={400} lineHeight='20px' py={1}>
            {user} {time}
          </Typography>
          <Typography color={'#CECDCE'} fontFamily={'Space Grotesk'} fontSize={16}
            fontWeight={500} lineHeight='20px' >
            {content}
          </Typography>
      </Box>
    </Box>
  )
}

export default ChatItem
