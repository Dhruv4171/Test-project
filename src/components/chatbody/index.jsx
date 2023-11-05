import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ChatBody = ({ chat }) => {
  const aiStyle = {
    bgcolor: 'background.paper',
    opacity: 0.4,
    boxShadow: 3,
    marginRight: 'auto',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        overflow:'hidden',
      }}
    >
      {chat.map((message, i) => (
        <Paper
          key={i}
          elevation={3}
          sx={{
            borderColor: 'text.secondary',
            borderWidth: 1,
            borderStyle: 'transparent',
            borderRadius: 3.5,
            p: 2,
            maxWidth: '80%',
            alignSelf: message.sender === 'ai' ? 'start' : 'end',
            bgcolor: message.sender === 'ai' ? aiStyle.bgcolor : null,
            opacity: message.sender === 'ai' ? aiStyle.opacity : null,
            boxShadow: message.sender === 'ai' ? aiStyle.boxShadow : null,
            marginRight: message.sender === 'ai' ? aiStyle.marginRight : null,
          }}
        >
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
            {message.message}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default ChatBody;
