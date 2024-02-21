import React from 'react';
import { Stack, Typography } from '@mui/material';

function Footer() {
  return (
    <>
      <Stack sx={{ color: "white", padding: "1.125rem 0rem", width: "100%", textAlign: "center", fontSize: '20px' }}>
        <Typography variant='body1'>
          &copy; Idea Innovation Cell
        </Typography>
      </Stack>
    </>
  )
}

export default Footer