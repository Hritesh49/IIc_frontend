import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import imsta from "../assets/Animation - 1708551503875.json";
import you from "../assets/Animation - 1708551992046.json";
import git from "../assets/Animation - 1708552066124.json";
import face from "../assets/Animation - 1708551869893.json";
import lin from "../assets/Animation - 1708552149066.json";

function Footer() {
  return (
    <Stack sx={{ width: '100%', height: 'fit-content', color: 'azure', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <Stack
        gap={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'white',
          color: "#021E30",
          width: '100%',
          padding: '1rem 0rem'
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bolder', fontSize: { xs: "2.1875rem", md: '1.605rem' }, fontFamily: 'Poppins, sans-serif' }}>Our Social Networks</Typography>
        <Typography variant="body1" sx={{ fontWeight: '400', fontSize: { xs: "1.25rem", md: '1.25rem' }, fontFamily: 'Poppins, sans-serif' }}>Follow our social media handles to stay updated!</Typography>
        <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link href="https://www.instagram.com/idea_labs/"><Lottie style={{ width: '4.8125rem', height: '4.8125rem', cursor: 'pointer' }} animationData={imsta} /></Link>
          <Link href="https://www.facebook.com/ideaclubvssut"><Lottie style={{ width: '4.8125rem', height: '4.8125rem', cursor: 'pointer' }} animationData={face} /></Link>
          <Link href="https://www.youtube.com/channel/UCl1eNHmMb4IjWveBRbKU7Iw"><Lottie style={{ width: '4.8125rem', height: '4.8125rem', cursor: 'pointer' }} animationData={you} /></Link>
          <Link href="https://github.com/Idea-Innovation-Cell-VSSUT-Burla"><Lottie style={{ width: '3.4375rem', height: '3.4375rem', cursor: 'pointer' }} animationData={git} /></Link>
          <Link href="https://www.linkedin.com/company/idea-and-innovation-cell/"><Lottie style={{ width: '4.8125rem', height: '4.8125rem', cursor: 'pointer' }} animationData={lin} /></Link>
        </Stack>
      </Stack>
      <Typography variant="body1" sx={{ fontWeight: '400', color: 'white', fontSize: { xs: "1.25rem", md: '1.15rem' }, fontFamily: 'Poppins, sans-serif', width: '100%', margin: "2rem 0px" }}>
        © Copyright Idea Innovation Cell. All Rights Reserved
      </Typography>
    </Stack>
  );
}

export default Footer;
