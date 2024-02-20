import { Stack, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <>
      <Stack gap={2} sx={{ display: 'flex', flexDirection: "row", color: 'whitesmoke', justifyContent: 'center', alignItems: 'center', width: '90%', border: "2px double white", padding: { xs: "15px", sm: "0px 10px 20px", md: '25px 30px' }, borderRadius: '12px', background: '#0000007f' }}>
        <img style={{ width: "250px", height: "250px", }} src='./iic_logo.png' alt='Logo of IIC' />
        <Stack gap={2} sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h3' sx={{ fontSize: '60px', fontWeight: 'bolder', textAlign: 'center', width: '100%', fontFamily: 'Roboto Condensed, sans-serif' }}>About Us</Typography>
          <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '200', textAlign: 'center', lineHeight: '1.7', width: '100%', fontFamily: 'Roboto Condensed, sans-serif' }}>"Innovation is the ability to see change as an opportunity" Idea
            Innovation Cell , the official Idea Club of VSSUT, Burla , is a
            cluster of young technophiles,scientific enthusiasts and
            techpreneurs who are on an expedition to serve the nation.Focused to
            build-up products in enlightening the everyday difficulties of the
            community,We are delighted to launch the Official Induction
            programme for the year 2023! Click on the link below to register for
            the Induction programme."</Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default About