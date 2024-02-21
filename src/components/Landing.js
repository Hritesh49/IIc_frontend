import { Button, Stack, Typography, Box } from '@mui/material';
import React from 'react'

function Landing({ scrollToAbout }) {
    return (
        <>
            <Box sx={{ width: '100%', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: `url(./back.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <Stack gap={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack gap={2} sx={{ color: 'whitesmoke', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='h2' sx={{ fontWeight: 'bolder', fontFamily: 'Roboto Condensed, sans-serif', fontSize: { xs: "4.375rem", md: '80px' }, filter: 'drop-shadow(0px .25rem .5rem #ffffff78)' }}>Join our Induction Programme 2024</Typography>
                        <Typography variant='h3' sx={{ fontWeight: 'bolder', fontFamily: 'Roboto Condensed, sans-serif', fontSize: { xs: "2.8125rem", md: '50px' }, filter: 'drop-shadow(0px .25rem .5rem #ffffff78)' }}>Be a part of the Idea Innovation Cell !</Typography>
                    </Stack>
                    <Stack gap={4} sx={{ color: 'whitesmoke', textAlign: 'center', display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Button onClick={scrollToAbout} variant='contained' sx={{ backgroundColor: "#00CED1", color: '#021E30', padding: { xs: "4px 6px", md: "8px 10px" }, fontSize: { xs: '12px', md: '14px' }, boxShadow: "1px 1px 8px 4px #ffffff50" }}>Get Started</Button>
                        <Button variant='contained' target="_blank" href='https://youtu.be/YGlJoF81U2E?feature=shared' sx={{ backgroundColor: "#00CED1", color: '#021E30', padding: { xs: "4px 6px", md: "8px 10px" }, fontSize: { xs: '12px', md: '14px' }, boxShadow: "1px 1px 8px 4px #ffffff50" }}>Watch Video</Button>
                    </Stack>
                </Stack>
            </Box >
        </>
    )
}

export default Landing