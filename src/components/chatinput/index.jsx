import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({ sendMessage, receiveMessage }) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const apiUrl = 'https://langchainjs-upstash-redis.onrender.com/process-input';

    if (value.trim() === '') return;

    sendMessage({ sender: 'user', message: value });
    setLoading(true);
    setValue('');

    const requestBody = {
        API_KEY: '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',
      sessionId: '52747854785473',
      input: value.trim()
    };

    try {
      const response = await axios.post(apiUrl, requestBody);
      const aiResponseText = response.data.response.response
        .replace(/\\n/g, ' ')
        .trim();
      receiveMessage({ sender: 'ai', message: aiResponseText });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor:'#2B3453' ,
        boxShadow: 1,
        borderRadius: 1,
        p: 1,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        color:'#000'
      }}
    >
      <TextareaAutosize
        minRows={3}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
        placeholder="Type your message here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
        style={{ width: '80%', border: 'none', outline: 'none', resize: 'none', background: 'transparent',color:'#fff' }}
      />
      {loading ? (
        <CircularProgress
          size={24}
          sx={{ position: 'absolute', top: '50%', right: 32, transform: 'translateY(-50%)' }}
        />
      ) : (
        <IconButton
          onClick={handleSubmit}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 8,
            transform: 'translateY(-50%)',color:'#fff',
            '&:hover': { scale: 2},
          }}
        >
          <SendIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default ChatInput;
