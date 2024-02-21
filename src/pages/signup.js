import React, { useState } from "react";
import { Stack, Button, Typography, TextField, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const [fname, setFname] = useState("");
    const [pnum, setPnum] = useState("");
    const [rnum, setRnum] = useState("");
    const [email, setEmail] = useState("");
    const [branch, setBranch] = useState("");
    const [dpone, setDPone] = useState("");
    const [dptwo, setDPtwo] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(fname, pnum, rnum, email, branch, dpone, dptwo, password);
        fetch("https://iic-backend-r3jg.onrender.com/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fname,
                email,
                pnum,
                rnum,
                branch,
                dpone,
                dptwo,
                password,

            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status === "ok") {
                    alert("Registration Successful");
                    setTimeout(() => {
                        navigate('/sign-in');
                    }, 500);
                } else {
                    alert("Something went wrong");
                }
            });
    };

    return (
        <Stack sx={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: 'center', height: "100dvh",background:"#021E30" }}>
            <Stack sx={{ display: "flex", flexDirection: "row", width: { xs: '100%', sm: '85%', md: '80%' }, height: { xs: "100dvh", sm: "90dvh", md: '90dvh' }, boxShadow: "1px 1px 10px 8px #00000048", borderRadius: '8px', border: { xs: "2px solid white", sm: "none" } }}>
                <Stack sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', flex: '1', background: `url(./osama.png)`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover', borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" }}>
                </Stack>
                <Stack sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flex: "1", height: 'inherit', borderTopRightRadius: '8px', borderBottomRightRadius: "8px", position: 'relative' }}>
                    <Stack sx={{ background: `url(./iic_logo.png)`, height: '100%', display: 'flex', backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', zIndex: '1', width: '100%', position: "absolute", opacity: '0.2' }}>
                    </Stack>
                    <form onSubmit={handleSubmit} style={{ width: '100%', padding: '1.5rem', height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '8px', zIndex: '2', }}>
                        <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Roboto Condensed, sans-serif', borderBottom: '4px solid white', paddingBottom: '0.25rem', borderRadius: '2px', }}>Sign Up</Typography>
                        <Stack sx={{ width: '100%', }}>
                            <TextField
                                required fullWidth id="outlined-required" label="Full Name" name='full name' type='text' placeholder='Enter full name' onChange={(e) => setFname(e.target.value)} InputLabelProps={{ sx: { color: "whitesmoke", fontSize: { xs: "1.5rem", md: "16px" } } }} sx={{
                                    '& .MuiInputBase-input': {
                                        color: 'whitesmoke',
                                        fontSize: { xs: "1.5rem", md: "16px" },
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#00CED1',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'whitesmoke',
                                    },
                                }} variant="standard" />
                        </Stack>

                        <Stack sx={{ width: '100%' }}>
                            <TextField
                                required fullWidth id="outlined-required" label="Email Address" name='email' type='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} InputLabelProps={{ sx: { color: "whitesmoke", fontSize: { xs: "1.5rem", md: "16px" } } }} sx={{
                                    '& .MuiInputBase-input': {
                                        color: 'whitesmoke',
                                        fontSize: { xs: "1.5rem", md: "16px" }
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#00CED1',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'whitesmoke',
                                    },
                                }} variant="standard" />
                        </Stack>

                        <Stack gap={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <TextField
                                required fullWidth id="outlined-required" label="Phone Number" name='Phno' type='number' placeholder='Enter Phone number' onChange={(e) => setPnum(e.target.value)} InputLabelProps={{ sx: { color: "whitesmoke", fontSize: { xs: "1.5rem", md: "16px" } } }} sx={{
                                    '& .MuiInputBase-input': {
                                        color: 'whitesmoke',
                                        fontSize: { xs: "1.5rem", md: "16px" }
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#00CED1',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'whitesmoke',
                                    },
                                }} variant="standard" />

                            <TextField
                                required fullWidth id="outlined-required" label="Registration Number" name='regdno' type='number' placeholder='Enter Registration number' onChange={(e) => setRnum(e.target.value)} InputLabelProps={{ sx: { color: "whitesmoke", fontSize: { xs: "1.5rem", md: "16px" } } }} sx={{
                                    '& .MuiInputBase-input': {
                                        color: 'whitesmoke',
                                        fontSize: { xs: "1.5rem", md: "16px" }
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#00CED1',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'whitesmoke',
                                    },
                                }} variant="standard" />
                        </Stack>

                        <Stack sx={{ width: '100%' }}>

                            <select required name='branch' onChange={(e) => setBranch(e.target.value)} style={{
                                padding: '.625rem',
                                fontSize: { xs: "1.5rem", md: "16px" },
                                border: '.0625rem solid #ccc',
                                borderRadius: '.3125rem',
                                width: '100%',
                                boxSizing: 'border-box',
                                background: 'transparent',
                                color: 'whitesmoke',
                            }}>
                                <option value="" disabled selected>Select your Branch</option>
                                <option value="cs" style={{ color: '#021E30' }}>CS</option>
                                <option value="it" style={{ color: '#021E30' }}>IT</option>
                                <option value="etc" style={{ color: '#021E30' }}>ETC</option>
                                <option value="mech" style={{ color: '#021E30' }}>Mech</option>
                                <option value="ee" style={{ color: '#021E30' }}>EE</option>
                                <option value="eee" style={{ color: '#021E30' }}>EEE</option>
                                <option value="Prod" style={{ color: '#021E30' }}>Production</option>
                                <option value="Int maths" style={{ color: '#021E30' }}>Int maths</option>
                                <option value="Int phy" style={{ color: '#021E30' }}>Int phy</option>
                                <option value="Int chem" style={{ color: '#021E30' }}>Int chem</option>
                                <option value="mme" style={{ color: '#021E30' }}>MME</option>
                                <option value="che" style={{ color: '#021E30' }}>CHE</option>
                                <option value="ce" style={{ color: '#021E30' }}>CIVIL</option>

                            </select>

                        </Stack>

                        <Stack gap={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <select required name='domain one' onChange={(e) => setDPone(e.target.value)} style={{
                                padding: '.625rem',
                                fontSize: { xs: "1.5rem", md: "16px" },
                                border: '.0625rem solid #ccc',
                                borderRadius: '.3125rem',
                                width: '100%',
                                boxSizing: 'border-box',
                                background: 'transparent',
                                color: 'whitesmoke',
                            }}>
                                <option value="" disabled selected>Select your domain preference 1</option>
                                <option value="cs" style={{ color: '#021E30' }}>CS</option>
                                <option value="electronics" style={{ color: '#021E30' }}>Electronic</option>
                                <option value="mechanical" style={{ color: '#021E30' }}>Mechanical</option>
                                <option value="Chemical" style={{ color: '#021E30' }}>Chemical</option>
                                <option value="management" style={{ color: '#021E30' }}>Management</option>
                                <option value="graphics" style={{ color: '#021E30' }}>Graphics Designing</option>
                                <option value="video-editing" style={{ color: '#021E30' }}>Video Editing</option>
                                <option value="content-writing" style={{ color: '#021E30' }}>Content Writing</option>
                            </select>
                            <select required name='domain two' onChange={(e) => setDPtwo(e.target.value)}
                                style={{
                                    padding: '.625rem',
                                    fontSize: { xs: "1.5rem", md: "16px" },
                                    border: '.0625rem solid #ccc',
                                    borderRadius: '.3125rem',
                                    width: '100%',
                                    boxSizing: 'border-box',
                                    background: 'transparent',
                                    color: 'whitesmoke',
                                }}>
                                <option value="" disabled selected>Select your domain preference 2</option>
                                <option value="cs" style={{ color: '#021E30' }}>CS</option>
                                <option value="electronics" style={{ color: '#021E30' }}>Electronic</option>
                                <option value="mechanical" style={{ color: '#021E30' }}>Mechanical </option>
                                <option value="chemical" style={{ color: '#021E30' }}>Chemical </option>
                                <option value="management" style={{ color: '#021E30' }}>Management</option>
                                <option value="graphics" style={{ color: '#021E30' }}>Graphics Designing</option>
                                <option value="video-editing" style={{ color: '#021E30' }}>Video Editing</option>
                                <option value="content-writing" style={{ color: '#021E30' }}>Content Writing</option>
                            </select>
                        </Stack>

                        <Stack sx={{ width: '100%' }}>
                            <TextField
                                required fullWidth id="outlined-required" label="Password" name='password' type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} InputLabelProps={{ sx: { color: "whitesmoke", fontSize: { xs: "1.5rem", md: "16px" } } }} sx={{
                                    '& .MuiInputBase-input': {
                                        color: 'whitesmoke',
                                        fontSize: { xs: "1.5rem", md: "16px" }
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#00CED1',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'whitesmoke',
                                    },
                                }} variant="standard" />
                        </Stack>
                        <Stack sx={{ width: '100%' }}>
                            <Button variant="contained" sx={{ background: "#00CED1", color: '#021E30', padding: '8px 0px', borderRadius: '12px', fontSize: { xs: "1.15rem", md: "16px" } }} type="submit">
                                Sign Up
                            </Button>
                        </Stack>
                        <Typography sx={{ color: 'whitesmoke', textAlign: 'center' }}>
                            Already registered ! <a style={{ color: '#00CED1' }} href="/sign-in">sign in?</a>
                        </Typography>
                    </form>
                </Stack>
            </Stack>
        </Stack>
    );
}
