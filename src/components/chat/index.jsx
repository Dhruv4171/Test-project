import React from 'react';
import ChatBody from '../chatbody';
import ChatInput from '../chatinput';
import { Box, Typography } from '@mui/material';

const Chat = ({ chat, sendMessage, receiveMessage }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        py: 6,
        px: { xs: 3, sm: 8 },
        color: 'common.white',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: 'primary.dark',
        background: 'linear-gradient(to right,#0f1728, #172454)',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 3,
          textTransform: 'uppercase',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Shakti
      </Typography>
      <Box
        sx={{
          height: '90%',
          overflow: 'auto',
          width: '100%',
          maxWidth: '4xl',
          minWidth: '20rem',
          py: 2,
          px: 1,
          alignSelf: 'center',
        }}
      >
        <ChatBody chat={chat} />
      </Box>
      <Box
        sx={{
          width: '100%',
          maxWidth: '4xl',
          minWidth: '20rem',
          alignSelf: 'center',
        }}
      >
        <ChatInput sendMessage={sendMessage} receiveMessage={receiveMessage} />
      </Box>
    </Box>
  );
};

export default Chat;
