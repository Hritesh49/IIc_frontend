import { Button, Stack, Typography, Box } from '@mui/material'
import React from 'react'

function Landing() {
    return (
        <>
            <Box sx={{ width: '100%', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Stack gap={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack gap={2} sx={{ color: 'whitesmoke', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='h2' sx={{ fontWeight: 'bolder', fontFamily: 'Roboto Condensed, sans-serif', fontSize: { xs: "60px", md: '80px' } }}>Join our Induction Programme 2024</Typography>
                        <Typography variant='h3' sx={{ fontWeight: 'bolder', fontFamily: 'Roboto Condensed, sans-serif', fontSize: { xs: "30px", md: '50px' } }}>Be a part of the Idea Innovation Cell !</Typography>
                    </Stack>
                    <Stack sx={{ color: 'whitesmoke', textAlign: 'center', display: 'flex', flexDirection: 'row', width: '40%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Button variant='contained' sx={{backgroundColor:"#00CED1",color:'#021E30'}}>Get Started</Button>
                        <Button variant='contained' sx={{backgroundColor:"#00CED1",color:'#021E30'}}>Watch Video</Button>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}

export default Landing