import { Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export const NewUserForm = () => {
  const [NewUserDetails, SetNewUserDetails] = useState({
    username: "",
    password: "",
    admin: false,
    fname: "",
    lname: "",
    phone: "",
    email: "",
    position: 0,
    role: "",
  });

  const roles = [
    "Junior Administrator",
    "Administrator",
    "Night Administrator",
    "Senior Administrator",
  ];

  const SendNewUser = async () => {
    if (
      NewUserDetails.username === "" ||
      NewUserDetails.password === "" ||
      NewUserDetails.fname === "" ||
      NewUserDetails.lname === "" ||
      NewUserDetails.phone === "" ||
      NewUserDetails.email === "" ||
      NewUserDetails.role === ""
    ) {
      window.alert("Please fill all the fields");
    }

    return(
        <Paper sx={{
            width:"50vh",
            height:"50vh"
        }}>

        </Paper>
    );
  };
};
