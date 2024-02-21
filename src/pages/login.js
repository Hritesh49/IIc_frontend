import { Stack, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

export default function Login() {
  const [rnum, setRnum] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(rnum, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        rnum,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "./userDetails";
        }
      });
  }

  return (
    <Stack sx={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: 'center', height: "100dvh" }}>
      <Stack sx={{ display: "flex", flexDirection: "row", width: '80%', height: '90dvh', boxShadow: "1px 1px 10px 8px #00000048", borderRadius: '8px' }}>
        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1', background: `url(./osama.png)`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover', borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" }}>
        </Stack>
        <Stack sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flex: "1", height: 'inherit', borderTopRightRadius: '8px', borderBottomRightRadius: "8px" }}>
          <form onSubmit={handleSubmit} style={{ width: '100%', padding: '1.5rem', height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Roboto Condensed, sans-serif', borderBottom: '4px solid white', paddingBottom: '0.25rem', borderRadius: '2px' }}>Sign In</Typography>

            <Stack sx={{ width: '100%' }}>
              <TextField
                required fullWidth id="outlined-required" label="Registration Number" name='regdno' type='number' placeholder='Enter Registration number' onChange={(e) => setRnum(e.target.value)} InputLabelProps={{ sx: { color: "whitesmoke" } }} sx={{
                  '& .MuiInputBase-input': {
                    color: 'whitesmoke',
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
                required fullWidth id="outlined-required" label="Password" name='password' type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} InputLabelProps={{ sx: { color: "whitesmoke" } }} sx={{
                  '& .MuiInputBase-input': {
                    color: 'whitesmoke',
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
              <Button variant="contained" sx={{ background: "#00CED1", color: '#021E30', padding: '8px 0px', borderRadius: '12px' }} type="submit" >
                Sign in
              </Button>
            </Stack>
            <Typography sx={{ color: 'whitesmoke', textAlign: 'center' }}>
              Don't have an account ? <a style={{ color: '#00CED1' }} href="/sign-up">Sign Up</a>
            </Typography>
          </form>
        </Stack>
      </Stack>
    </Stack>
  );
}
