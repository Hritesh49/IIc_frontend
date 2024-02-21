import { Stack } from '@mui/material';
import React from 'react';


function Loader() {

  return (
    <>
      <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100dvh', background: '#021E30' }}>
        <img className='blink' src='./iic_logo.png' alt='Logo of IEEE blinking' />
      </Stack>
    </>
  )
}

export default Loader