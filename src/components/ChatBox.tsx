import { FC } from 'react';

import Textarea from '@mui/joy/Textarea';
import { Box, Button, Typography } from '@mui/material';

import { styled } from "@mui/material/styles";

const TextAreaStyle = styled("textarea")(({ theme }) => ({
  border: '1px solid #CECDCE',
  width: "100%",
  height: '180px',
  weight: 700,
  padding: '20px',
  flexGrow: 1,
  boxSizing: "border-box",
  borderRadius: 4,
  backgroundColor: "#27292D",
  fontSize: '16px',
  resize: 'none',
  "&::placeholder": {
    opacity: 1,
    color: 'white',
    fontFamily: 'Space Grotesk',
    fontSize: '16px'
  },
}));

const ChatBox: FC = () => {
  return (
    <Box sx={{position: 'relative'}}>
      <TextAreaStyle placeholder='Start Typing...' />
      <Button
            sx={{position: 'absolute', width: '180px', height: '60px', bottom: '10px', right: '10px', background: 'white', border: '1px solid #CECDCE', borderRadius: '4'}}
            style={{textTransform: 'none'}}
          >
          <Typography color="black" fontFamily='SF Compact' fontWeight={700} fontSize={16}>
            Ask Clara ⌘ Enter
          </Typography>
      </Button>
    </Box>
  )
}

export default ChatBox
