import React, { useRef } from 'react';
import { Stack, Button, Typography, Box } from '@mui/material';
import Domain from '../components/Domain';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Contact from "../components/Contact";
// import Process from '../components/process';

function Home() {

  const land = useRef(null);
  const about = useRef(null);
  const domain = useRef(null);
  const contact = useRef(null);

  const ScrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start", });
    }
  };


  const ScrollLand = () => {
    ScrollToRef(land);
  }

  const ScrollAbout = () => {
    ScrollToRef(about);
  }

  const ScrollDomain = () => {
    ScrollToRef(domain);
  }

  const ScrollContact = () => {
    ScrollToRef(contact);
  }

  return (
    <>
      <Stack sx={{ background: "#021E30", }} >
        <Navbar
          onClick1={ScrollLand}
          onClick2={ScrollAbout}
          onClick3={ScrollDomain}
          onClick4={ScrollContact}
        />
        <Stack ref={land}>
          <Box sx={{ width: '100%', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack gap={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Stack gap={2} sx={{ color: 'whitesmoke', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h2' sx={{ fontWeight: 'bolder', fontFamily: 'Roboto Condensed, sans-serif', fontSize: { xs: "60px", md: '80px' } }}>Join our Induction Programme 2024</Typography>
                <Typography variant='h3' sx={{ fontWeight: 'bolder', fontFamily: 'Roboto Condensed, sans-serif', fontSize: { xs: "30px", md: '50px' } }}>Be a part of the Idea Innovation Cell !</Typography>
              </Stack>
              <Stack sx={{ color: 'whitesmoke', textAlign: 'center', display: 'flex', flexDirection: 'row', width: '30%', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button variant='contained' sx={{ backgroundColor: "#00CED1", color: '#021E30' }}>Get Started</Button>
                <Button variant='contained' sx={{ backgroundColor: "#00CED1", color: '#021E30' }}>Watch Video</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Stack gap={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: "6rem", paddingBottom: '1.5rem' }}>
          <Stack sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: "center" }} ref={about}>
            <Stack gap={2} sx={{ display: 'flex', flexDirection: "row", color: 'whitesmoke', justifyContent: 'center', alignItems: 'center', width: '90%', border: "2px double white", padding: { xs: "15px", sm: "0px 10px 20px", md: '25px 30px' }, borderRadius: '12px', background: '#0000007f' }}>
              <img style={{ width: "250px", height: "250px", borderRight: '4px solid white' }} src='./iic_logo.png' alt='Logo of IIC' />
              <Stack gap={2} sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center",}}>
                <Typography variant='h3' sx={{ fontSize: '60px', fontWeight: 'bolder', textAlign: 'center', width: '100%', fontFamily: 'Roboto Condensed, sans-serif' }}>Induction 2024</Typography>
                <Typography variant='body1' sx={{ fontSize: '20px', fontWeight: '200', textAlign: 'center', lineHeight: '2', width: '100%', fontFamily: 'Roboto Condensed, sans-serif' }}>"Innovation is the ability to see change as an opportunity" Idea
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
          </Stack >
          <Stack sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: "center" }} ref={domain} >
            <Domain />
          </Stack>
          <Stack sx={{ width: "100%" }} ref={contact} >
            <Contact />
          </Stack>
        </Stack>
        <Footer />
      </Stack >
    </>
  )
}

export default Home