import React, { useState } from "react";
import { Stack, Button, Typography, TextField } from '@mui/material';

export default function SignUp() {
    const [fname, setFname] = useState("");
    const [pnum, setPnum] = useState("");
    const [rnum, setRnum] = useState("");
    const [email, setEmail] = useState("");
    const [branch, setDPone] = useState("");
    const [dpone, setDPtwo] = useState("");
    const [dptwo, setBranch] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(fname, pnum, rnum, email, branch, dpone, dptwo, password);
        fetch("http://localhost:5000/register", {
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
                } else {
                    alert("Something went wrong");
                }
            });
    };

    return (
        <Stack sx={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: 'center', height: "100dvh" }}>
            <Stack sx={{ display: "flex", flexDirection: "row", width: '80%', height: '90dvh', boxShadow: "1px 1px 10px 8px #00000048", borderRadius: '8px' }}>
                <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1', background: `url(./osama.png)`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover', borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" }}>
                </Stack>
                <Stack sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flex: "1", height: 'inherit', borderTopRightRadius: '8px', borderBottomRightRadius: "8px" }}>
                    <form onSubmit={handleSubmit} style={{ width: '100%', padding: '1.5rem', height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',gap:'8px' }}>
                        <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Roboto Condensed, sans-serif' }}>Sign UP</Typography>

                        <Stack sx={{ width: '100%' }}>
                            <TextField
                                required fullWidth id="outlined-required" label="First Name" name='first name' type='text' placeholder='Enter first name' onChange={(e) => setFname(e.target.value)} InputProps={{ sx: { color: "whitesmoke", '& .MuiOutlinedInput-notchedOutline': { borderColor: 'whitesmoke' }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'lightblue' }, } }} InputLabelProps={{ sx: { color: "whitesmoke" } }} variant="standard" />
                        </Stack>

                        <Stack sx={{ width: '100%' }}>
                            <TextField
                                required fullWidth id="outlined-required" label="Email Address" name='email' type='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} InputProps={{ sx: { color: "whitesmoke", '& .MuiOutlinedInput-notchedOutline': { borderColor: 'whitesmoke' }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'lightblue' }, } }} InputLabelProps={{ sx: { color: "whitesmoke" } }} variant="standard" />
                        </Stack>

                        <Stack gap={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <TextField
                                required fullWidth id="outlined-required" label="Phone Number" name='Phno' type='number' placeholder='Enter Phone number' onChange={(e) => setPnum(e.target.value)} InputProps={{ sx: { color: "whitesmoke", '& .MuiOutlinedInput-notchedOutline': { borderColor: 'whitesmoke' }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'lightblue' }, } }} InputLabelProps={{ sx: { color: "whitesmoke" } }} variant="standard" />

                            <TextField
                                required fullWidth id="outlined-required" label="Registration Number" name='regdno' type='number' placeholder='Enter Registration number' onChange={(e) => setRnum(e.target.value)} InputProps={{ sx: { color: "whitesmoke", '& .MuiOutlinedInput-notchedOutline': { borderColor: 'whitesmoke' }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'lightblue' }, } }} InputLabelProps={{ sx: { color: "whitesmoke" } }} variant="standard" />
                        </Stack>

                        <Stack sx={{ width: '100%' }}>
                            <TextField
                                required fullWidth id="outlined-required" label="Branch" name='branch' type='text' placeholder='Enter Branch' onChange={(e) => setBranch(e.target.value)} InputProps={{ sx: { color: "whitesmoke", '& .MuiOutlinedInput-notchedOutline': { borderColor: 'whitesmoke' }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'lightblue' }, } }} InputLabelProps={{ sx: { color: "whitesmoke" } }} variant="standard" />
                        </Stack>

                        <Stack gap={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <TextField
                                required fullWidth id="outlined-required" label="domain Preference 1" name='domain one' type='text' placeholder='Enter domain preference one' onChange={(e) => setDPone(e.target.value)} InputProps={{ sx: { color: "whitesmoke", '& .MuiOutlinedInput-notchedOutline': { borderColor: 'whitesmoke' }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'lightblue' }, } }} InputLabelProps={{ sx: { color: "whitesmoke" } }} variant="standard" />

                            <TextField
                                required fullWidth id="outlined-required" label="domain Preference 2" name='domain two' type='text' placeholder='Enter domain preference one' onChange={(e) => setDPtwo(e.target.value)} InputProps={{ sx: { color: "whitesmoke", '& .MuiOutlinedInput-notchedOutline': { borderColor: 'whitesmoke' }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'lightblue' }, } }} InputLabelProps={{ sx: { color: "whitesmoke" } }} variant="standard" />
                        </Stack>

                        <Stack sx={{ width: '100%' }}>
                            <TextField
                                required fullWidth id="outlined-required" label="Password" name='password' type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} InputProps={{ sx: { color: "whitesmoke", '& .MuiOutlinedInput-notchedOutline': { borderColor: 'whitesmoke' }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'lightblue' }, } }} InputLabelProps={{ sx: { color: "whitesmoke" } }} variant="standard" />
                        </Stack>

                        <Stack sx={{ width: '100%' }}>
                            <Button variant="contained" sx={{ background: "#00CED1", color: '#021E30',padding:'8px 0px',borderRadius:'12px' }} type="submit" className="btn btn-primary">
                                Sign Up
                            </Button>
                        </Stack>
                        <Typography sx={{ color: 'whitesmoke', textAlign: 'center' }}>
                            Already registered <a style={{ color: '#00CED1' }} href="/sign-in">sign in?</a>
                        </Typography>
                    </form>
                </Stack>
            </Stack>
        </Stack>
    );
}
