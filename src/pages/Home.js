import React, { useRef } from 'react';
import Landing from '../components/Landing';
import { Stack } from '@mui/material';
import About from '../components/About';
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
          <Landing />
        </Stack>
        <Stack gap={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: "6rem", paddingBottom: '1.5rem' }}>
          <Stack sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: "center" }} ref={about}>
            <About />
          </Stack >
          <Stack sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: "center" }} ref={domain} >
            <Domain />
          </Stack>
          <Stack sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: "center" }} ref={contact} >
            <Contact />
          </Stack>
        </Stack>
        <Footer />
      </Stack >
    </>
  )
}

export default Home