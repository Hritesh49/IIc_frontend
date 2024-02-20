import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <>
      <Stack gap={2} sx={{ display: 'flex', flexDirection: "row", color: 'whitesmoke', justifyContent: 'center', alignItems: 'center', width: '90%', border: "2px double white", padding: { xs: "15px", sm: "0px 10px 20px", md: '25px 30px' }, borderRadius: '12px', background: '#0000007f' }}>
        <img style={{ width: "250px", height: "250px", }} src='./iic_logo.png' alt='Logo of IIC' />
        <Stack gap={2} sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
          <Typography variant='h3' sx={{ fontSize: '60px', fontWeight: 'bolder', textAlign: 'center', width: '100%', fontFamily: 'Roboto Condensed, sans-serif' }}>Induction 2024</Typography>
          <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '200', textAlign: 'center', lineHeight: '1.7', width: '100%', fontFamily: 'Roboto Condensed, sans-serif' }}>"Innovation is the ability to see change as an opportunity" Idea
            Innovation Cell , the official Idea Club of VSSUT, Burla , is a
            cluster of young technophiles,scientific enthusiasts and
            techpreneurs who are on an expedition to serve the nation.Focused to
            build-up products in enlightening the everyday difficulties of the
            community,We are delighted to launch the Official Induction
            programme for the year 2023! Click on the link below to register for
            the Induction programme."</Typography>
          <Stack sx={{ display: 'flex', flexDirection: 'row', width: "30%", justifyContent: "space-between", alignItems: "center" }}>
            <Button variant='contained' href='/sign-up'>Register Now</Button>
            <Button variant='contained'>Get details</Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default About