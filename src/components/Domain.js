import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Lottie from "lottie-react";
import Management from "../assets/Management.json";
import writer from "../assets/Content Writing.json";
import Video from "../assets/Video Editor.json";

function Domain() {

  const domain = [
    { title: 'Electronics', animation: Management, content: ['"Spark curiosity with electrons dance of possibilities."'], },
    { title: 'Mechanical', animation: Management, content: ['"Unfold Ideas: Papers Power Revealed."'], },
    { title: 'Chemical', animation: Management, content: ['"Building the future, one line at a time."'], },
    { title: 'CS', animation: writer, content: ['"Transforming ideas into a symphony of words."'], },
    { title: 'Management', animation: Management, content: ['"Lead with vision, manage with precision."'], },
    { title: 'Graphic Designing', animation: Video, content: ['"Where imagination meets visual expression."'], },
    { title: 'Video Editing', animation: Video, content: ['"Crafting stories, frame by frame."'], },
    { title: 'Content Writing', animation: writer, content: ['"Transforming ideas into a symphony of words."'], },
  ];

  const createBox = (title, animation, content) => (
    <Box
      sx={{
        display: 'flex',
        minWidth: '250px',
        height: '400px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '2',
        background: "whitesmoke",
        borderRadius: '8px',
        padding: '0.525rem',
        border: '.125rem solid #021E30',
        position: 'relative',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: "0.5rem",
          background: '#021E30',
          flex: '2',
        }}
      >
        <Lottie className='lottie' animationData={animation} style={{ width: "100%", }} />
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: { xs: '6px', sm: '12px' },
          textAlign: 'center',
          zIndex: '9',
          background: 'transparent',
          padding: '1rem',
          minHeight: "150px",
        }}>

        <Typography variant="h4" sx={{ fontWeight: 'bolder', color: '#021E30', fontSize: { xs: "2.1875rem", md: '30px' }, fontFamily: 'Roboto Condensed, sans-serif' }} >{title}</Typography>

        {content.map((line, index) => (
          <Typography variant='body1' sx={{ fontWeight: 'bold', color: '#021E30', fontSize: '1rem', fontFamily: 'Roboto Condensed, sans-serif' }} key={index}>{line}</Typography>
        ))}
      </Stack>
    </Box >
  );
  return (
    <>
      <Stack sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '30px 0px 30px 30px', borderTop: '2px solid white', borderBottom: '2px solid white', fontFamily: 'Roboto Condensed, sans-serif' }}>
        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '140px' }}>
          <Typography variant='h3' sx={{ color: 'whitesmoke', fontWeight: 'bolder', fontSize: { xs: "2.5rem", md: '90px' }, rotate: '270deg', height: '100px', fontFamily: 'Roboto Condensed, sans-serif', letterSpacing: "12px" }}>Domains</Typography>
        </Stack>
        <Stack className='domain' gap={2} sx={{
          width: '100%', display: 'flex', flexDirection: 'row', overflowX: 'scroll', padding: '20px', borderRadius: "0.5rem",alignItems:'center',
        }}>
          {domain.map(domain => createBox(domain.title, domain.animation, domain.content))}
        </Stack>
      </Stack >
    </>
  )
}

export default Domain