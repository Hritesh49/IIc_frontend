import React, { useRef } from 'react';
import { Stack, Button, Typography } from '@mui/material';
import Domain from '../components/Domain';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Landing from '../components/Landing';

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
          <Landing scrollToAbout={ScrollAbout} />
        </Stack>
        <Stack
          gap={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: "6rem",
            paddingBottom: '1.5rem'
          }}
        >
          {/* about us.............. */}
          <Stack
            sx={{
              width: "100%",
              display: 'flex',
              justifyContent: 'center',
              alignItems: "center"
            }}
            ref={about}
          >
            <Stack
              gap={2}
              sx={{
                display: 'flex',
                flexDirection: "row",
                color: 'whitesmoke',
                justifyContent: 'center',
                alignItems: 'center',
                width: '90%',
                border: "2px double white",
                padding: { xs: "20px 10px", sm: "30px 15px", md: '25px 30px' },
                borderRadius: '12px',
                background: '#0000007f',
                position: 'relative',
              }}
            >
              <Stack sx={{ background: `url(./iic_logo.png)`, height: '300px', display: 'flex', backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', zIndex: { xs: '2', md: "0" }, width: '300px', position: { xs: 'absolute', md: 'relative' }, opacity: { xs: '0.2', md: "1" } }}>
              </Stack>
              <Stack
                gap={2}
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: "center",
                  zIndex: '9',
                }}
              >
                <Typography
                  variant='h3'
                  sx={{
                    fontSize: { xs: '4.6875rem', md: '60px' },
                    fontWeight: 'bolder',
                    textAlign: 'center',
                    width: '100%',
                    fontFamily: 'Roboto Condensed, sans-serif'
                  }}
                >
                  Induction 2024
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: { xs: '1.5rem', md: '20px' },
                    fontWeight: '200',
                    textAlign: 'center',
                    lineHeight: { md: '2' },
                    width: '100%',
                    fontFamily: 'Roboto Condensed, sans-serif'
                  }}
                >
                  "Innovation is the ability to see change as an opportunity" Idea
                  Innovation Cell , the official Idea Club of VSSUT, Burla , is a
                  cluster of young technophiles,scientific enthusiasts and
                  techpreneurs who are on an expedition to serve the nation.Focused to
                  build-up products in enlightening the everyday difficulties of the
                  community,We are delighted to launch the Official Induction
                  programme for the year 2024! Click on the link below to register for
                  the Induction programme."
                </Typography>
                <Stack
                  gap={4}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Button
                    variant='contained'
                    href='/sign-up'
                    sx={{ padding: { xs: "4px 6px", md: "8px 10px" }, fontSize: { xs: '1rem', md: '14px' }, textAlign: 'center' }}
                  >
                    Register Now
                  </Button>
                  <Button
                    variant='contained'
                    sx={{ padding: { xs: "4px 6px", md: "8px 10px" }, fontSize: { xs: '1rem', md: '14px' }, textAlign: 'center' }}
                  >
                    Get details
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack >
          <Stack
            sx={{
              width: "100%",
              display: 'flex',
              justifyContent: 'center',
              alignItems: "center"
            }}
            ref={domain}
          >
            <Domain />
          </Stack>
          <Stack
            sx={{
              width: "100%",
              display: 'flex',
              justifyContent: 'center',
              alignItems: "center"
            }}
            ref={contact}
          >
            <Contact />
          </Stack>
          <Stack width={"100%"}>
            {/* <Footer /> */}
          </Stack>
        </Stack>
      </Stack >
    </>
  )
}

export default Home