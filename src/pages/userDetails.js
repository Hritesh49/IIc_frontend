import React, { useEffect, useState } from "react";
import UserHome from "../pages/userHome";

export default function UserDetails() {
    const [userData, setUserData] = useState("");


    useEffect(() => {
        fetch("https://iic-backend-r3jg.onrender.com/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");

                setUserData(data.data);

                if (data.data === "token expired") {
                    alert("Token expired login again");
                    window.localStorage.clear();
                    window.location.href = "./sign-in";
                }
            });
    }, []);

    return <UserHome userData={userData} />;
}