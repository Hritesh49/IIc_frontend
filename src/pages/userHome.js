import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function UserHome({ userData }) {
    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./sign-in";
    };
    return (
        <Stack sx={{ width: "100%", height: "100dvh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Stack sx={{ width: '70%', maxHeight: '70dvh', display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",boxShadow:"1px 1px 10px 8px #00000048" }}>
                <img
                    style={{
                        height: "100%",
                        display: "flex",
                        flex: "1",
                        borderRight:'2px solid whitesmoke'
                    }}
                    src='./iic_logo.png'
                    alt='Logo of IIC'
                />
                <Stack 
                gap={2}
                sx={{
                    color: 'whitesmoke',
                    flex: "1",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}>
                    <AccountCircleIcon sx={{fontSize:"100px"}} />
                    <Typography variant="h3">Dashboard</Typography>
                    <Typography variant="h5">Name : <Typography variant="h5">{userData.fname}</Typography></Typography>
                    <Typography variant="h5">Email : <Typography variant="h5">{userData.email}</Typography></Typography>
                    <br />
                    <Button variant="contained" sx={{ background: "#00CED1", color: '#021E30', padding: '8px 0px', borderRadius: '12px' }} onClick={logOut} >
                        Log Out
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}