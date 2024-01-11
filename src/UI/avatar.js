import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2} sx={{marginTop:1,marginLeft:1}}>
     
      <Avatar sx={{ bgcolor: deepPurple[500], }}>KV</Avatar>
    </Stack>
  );
}