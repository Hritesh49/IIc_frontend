import { Button, Stack, Typography, Box } from '@mui/material';
import React from 'react'

function Landing({ scrollToAbout }) {
    return (
        <>
            <Box sx={{ width: '100%', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: `url(./back.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', flexDirection: 'column' }}>
                <Stack gap={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack gap={2} sx={{ color: 'whitesmoke', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='h2' sx={{ fontWeight: 'bolder', fontFamily: 'Poppins, sans-serif', fontSize: { xs: "3.4375rem", md: '70px' }, filter: 'drop-shadow(0px .25rem .5rem #ffffff78)' }}>Join our Induction Programme 2024</Typography>
                        <Typography variant='h3' sx={{ fontWeight: 'bolder', fontFamily: 'Poppins, sans-serif', fontSize: { xs: "2.1875rem", md: '45px' }, filter: 'drop-shadow(0px .25rem .5rem #ffffff78)' }}>Be a part of the Idea Innovation Cell !</Typography>
                    </Stack>
                    <Stack gap={4} sx={{ color: 'whitesmoke', textAlign: 'center', display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Button onClick={scrollToAbout} variant='contained' sx={{
                            backgroundColor: "#00CED1", color: 'white', padding: { xs: ".375rem .5rem", md: "10px 12px" }, fontSize: { xs: '1.25rem', md: '14px' }, boxShadow: "1px 1px 8px 4px #ffffff50", border: "2px solid white", '&:hover': {
                                transform: "scale(1.05)",
                                background: 'white',
                                color: "#00ced1",
                                fontWeight: "500",
                                border: "2px solid #00ced1"
                            }
                        }}>Get Started</Button>
                        <Button variant='contained' target="_blank" href='https://youtu.be/YGlJoF81U2E?feature=shared' sx={{
                            backgroundColor: "#00CED1", color: '#white', padding: { xs: ".375rem .5rem", md: "10px 12px" }, fontSize: { xs: '1.25rem', md: '14px' }, boxShadow: "1px 1px 8px 4px #ffffff50",border:'2px solid white', '&:hover': {
                                transform: "scale(1.05)",
                                background: 'white',
                                color: "#00ced1",
                                fontWeight: "500",
                                border: "2px solid #00ced1"
                            }
                        }}>Watch Video</Button>
                    </Stack>
                </Stack>
                <Box sx={{ bottom: '7.5dvh', cursor: "pointer", zIndex: "9", position: 'absolute' }}>
                    <span className='arrows'></span>
                    <span className='arrows'></span>
                    <span className='arrows'></span>
                </Box>
            </Box >
        </>
    )
}

export default Landing