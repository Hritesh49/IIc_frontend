import React from 'react';
import { Stack, Typography, Box, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {

    const post_holder = [
        { pic: "./debankar.png", title: 'Debankar Shubhram', post: "Secretary", club: "Idea Innovation Cell", Phno: "6372777905", email: "debankarshubhram@gmail.com", link: "https://www.linkedin.com/in/debankar-shubhram-8025ab238" },
        { pic: "./sandip.png", title: 'Sandip Kumar Mohanty', post: "Asst.Secretary", club: "Idea Innovation Cell", Phno: "6371409570", email: "sandip.mohanty2004@gmail.com", link: "https://www.linkedin.com/in/sandip-kumar-mohanty-6b1582232" },
        { pic: "./satviki.png", title: 'Satviki Pradhan', post: "Asst.Secretary", club: "Idea Innovation Cell", Phno: "8847800176", email: "satviki.pradhan@gmail.com", link: "https://www.linkedin.com/in/satviki-pradhan-4a12b3263/" },
    ];

    const post = [
        { pic: "./Tushar.jpeg", title: 'Tushar Panigrahi', post: "Coding Co-Lead", club: "Idea Innovation Cell", Phno: "8917292860", email: "tusharpanigrahi66@gmail.com", link: "https://www.linkedin.com/in/tushar-panigrahi-575749237/" },
        { pic: "./Sibasis.jpeg", title: 'Sibasis Badatya', post: "Coding Co-Lead", club: "Idea Innovation Cell", Phno: "9114738467", email: "adityakumar098k@gmail.com", link: "https://www.linkedin.com/in/sibasis-badatya-3459a0238/" },
        { pic: "./Aniket.jpeg", title: 'Aniket Pradhan', post: "Web Dev Lead", club: "Idea Innovation Cell", Phno: "7077628195", email: "aniketpradhan6047@email.com", link: "https://www.linkedin.com/in/aniket-pradhan-88277a238/" },
        { pic: "./aditya.jpg", title: 'Aditya Kumar', post: "Web developer", club: "Idea Innovation Cell", Phno: "9114703231", email: "adityakumar098k@gmail.com", link: "https://www.linkedin.com/in/aditya-kumar-16537025a" },
        { pic: "./me.png", title: 'Hritesh Roshan Mahapatra', post: "Web developer", club: "Idea Innovation Cell", Phno: "8895292542", email: "hritesh532004@gmail.com", link: "http://www.linkedin.com/in/hritesh-roshan-mahapatra-54a75a25b" },
    ]

    const createBox = (pic, title, post, club, Phno, email, link) => (
        <Box
            sx={{
                width: { xs: '25rem', md: '21.875rem' },
                padding: "1.5rem 1.125rem",
                border: '.0625rem solid #010e16',
                boxShadow: '0 .625rem 2.1875rem #010e16',
                borderRadius: '.625rem',
                textAlign: 'center',
                color: '#fff',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                    transform: "scale(1.05)",
                }
            }}
        >
            <Stack
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: "0.5rem",
                    flex: '1',
                    objectFit: 'fill',
                }}
            >
                <img src={pic} alt='pictures' style={{ width: "7rem", height: '7rem', borderRadius: "50%", objectFit: "fill" }} />
            </Stack>
            <Stack
            gap={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '2',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: '.125rem', sm: '.375rem' },
                    textAlign: 'center',
                    zIndex: '9',
                    background: 'transparent',
                    padding: '1rem',
                    height: "9.375rem",
                    color: 'whitewhite'
                }}>
                <Typography variant="h4" sx={{ fontWeight: 'bolder', color: 'white', fontSize: { xs: "1.875rem", md: '1.375rem' }, fontFamily: 'Poppins, sans-serif' }} >{title}</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'lighter', color: 'white', fontSize: { xs: "1.25rem", md: '1rem' }, fontFamily: 'Poppins, sans-serif' }}>{post}</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'lighter', color: 'white', fontSize: { xs: "1.25rem", md: '1rem' }, fontFamily: 'Poppins, sans-serif' }}>{club}</Typography>
                <Typography variant='body1' sx={{ fontWeight: 'lighter', color: 'white', fontSize: { xs: "1.25rem", md: '1rem' }, fontFamily: 'Poppins, sans-serif' }} >Phone No. : {Phno}</Typography>
                <Stack gap={4} sx={{ display: "flex", flexDirection: "row" }}>
                    <Link mailto={email} sx={{ fontWeight: 'lighter', color: 'white', fontSize: { xs: "1.25rem", md: '1rem' }, fontFamily: 'Poppins, sans-serif' }} ><EmailIcon /></Link>
                    <Link href={link} sx={{ fontWeight: 'lighter', color: 'white', fontSize: { xs: "1.25rem", md: '1rem' }, fontFamily: 'Poppins, sans-serif' }} ><LinkedInIcon /></Link>
                </Stack>
            </Stack>
        </Box >
    );

    return (
        <>
            <Stack
                gap={4}
                sx={{
                    width: "90%",
                    borderRadius: '.625rem',
                    textAlign: 'center',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                <Typography variant='h3' sx={{
                    fontSize: { xs: '3.75rem', md: '50px' },
                    fontWeight: 'bolder',
                    textAlign: 'center',
                    width: '100%',
                    fontFamily: 'Poppins, sans-serif',
                    paddingBottom: '1rem',
                    borderBottom: '2px solid white'
                }}>
                    Contact Us
                </Typography>
                <Stack gap={6} sx={{ width: '100%', display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: { xs: "1.25rem", md: '1.125rem' } }}>For help in any kind of Query related to the Idea Innovation Cell Induction-2024 you may contact :</Typography>
                    <Stack gap={6} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                        {post_holder.map(contact => createBox(contact.pic, contact.title, contact.post, contact.club, contact.Phno, contact.email, contact.link))}
                    </Stack>
                </Stack>
                <Stack gap={6} sx={{ width: '100%', display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', marginTop: "1.5rem" }}>
                    <Typography sx={{ fontSize: { xs: "1.25rem", md: '1.125rem' } }}>For any Website or Registration Portal related queries contact :</Typography>
                    <Stack gap={6} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                        {post.map(contact => createBox(contact.pic, contact.title, contact.post, contact.club, contact.Phno, contact.email, contact.link))}
                    </Stack>
                </Stack>
            </Stack >

        </>
    );
};

export default Contact;
