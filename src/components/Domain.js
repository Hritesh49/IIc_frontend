import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Lottie from "lottie-react";
import Management from "../assets/Management.json";
import writer from "../assets/Content Writing.json";
import Video from "../assets/Video Editor.json";
import mech from "../assets/mechanical.json";
import electronics from "../assets/electronics.json";
import Gd from "../assets/gd.json";
import Chemical from "../assets/chemical.json";
import cs from "../assets/cs.json";

function Domain() {

  const domain = [
    { title: 'Electronics', animation: electronics, content: ['"where innovation sparks connections, powering the pulse of modern life."'], },
    { title: 'Mechanical', animation: mech, content: ['"From gears to gadgets, mechanical mastery powers progress, driving us forward"'], },
    { title: 'Chemical', animation: Chemical, content: ['"where molecules dance to the rhythm of discovery, shaping the essence of our world."'], },
    { title: 'CS', animation: cs, content: ['"the language of innovation, where algorithms unlock the potential of tomorrow"'], },
    { title: 'Management', animation: Management, content: ['"Lead, adapt, succeed: It is the art of turning vision into reality."'], },
    { title: 'Graphic Designing', animation: Gd, content: ['"Where imagination meets visual expression."'], },
    { title: 'Video Editing', animation: Video, content: ['"Crafting stories, frame by frame."'], },
    { title: 'Content Writing', animation: writer, content: ['"Transforming ideas into a symphony of words."'], },
  ];

  const createBox = (title, animation, content) => (
    <Box
      sx={{
        display: 'flex',
        minWidth: { xs: '18.75rem', md: '250px' },
        height: { xs: '28.125rem', md: '400px' },
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '2',
        background: "whitesmoke",
        borderRadius: '.5rem',
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
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: '.125rem', sm: '.375rem' },
          textAlign: 'center',
          zIndex: '9',
          background: 'transparent',
          padding: '1rem',
          height: "9.375rem",
        }}>

        <Typography variant="h4" sx={{ fontWeight: 'bolder', color: '#021E30', fontSize: { xs: "2.1875rem", md: '1.605rem' }, fontFamily: 'Roboto Condensed, sans-serif' }} >{title}</Typography>

        {content.map((line, index) => (
          <Typography variant='body1' sx={{ fontWeight: '500', color: '#021E30', fontSize: { xs: "1.25rem", md: '1.25rem' }, fontFamily: 'Roboto Condensed, sans-serif' }} key={index}>{line}</Typography>
        ))}
      </Stack>
    </Box >
  );
  return (
    <>
      <Stack sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: { xs: '1.25rem 0px 1.25rem 1.25rem', md: '30px 0px 30px 30px' }, borderTop: '.125rem solid white', borderBottom: '.125rem solid white', fontFamily: 'Roboto Condensed, sans-serif' }}>
        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '8.75rem' }}>
          <Typography variant='h3' sx={{ color: 'whitesmoke', fontWeight: 'bolder', fontSize: { xs: "7.5rem", md: '90px' }, rotate: '270deg', height: { xs: "9.375rem", md: '100px' }, fontFamily: 'Roboto Condensed, sans-serif', letterSpacing: { xs: ".875rem", md: '12px' } }}>Domains</Typography>
        </Stack>
        <Stack className='domain' gap={2} sx={{
          width: '100%', display: 'flex', flexDirection: 'row', overflowX: 'scroll', padding: '1.25rem', borderRadius: "0.5rem", alignItems: 'center', height: '100%'
        }}>
          {domain.map(domain => createBox(domain.title, domain.animation, domain.content))}
        </Stack>
      </Stack >
    </>
  )
}

export default Domain