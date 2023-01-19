import { Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

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

  const CreateNewUser = async () => {
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
  }


  return(
    <>
    <Paper sx={{
        width:"60vh",
        height:"80vh",
        minHeight:"700px",
        minWidth:"200px",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        margin:"auto",
        border:"1vh",
        padding:"1vh",
        backgroundColor: "rgba(213, 217, 218, 0.4)",
    }}>
        <h3>User Form</h3>
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({fname: e.target.value})}} label="First Name"></TextField>
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({lname: e.target.value})}} label="Last Name"></TextField>
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({phone: e.target.value})}} label="Phone"></TextField>
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({email: e.target.value})}} label="Email"></TextField>
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({position: e.target.value})}} label="Position" type="number"></TextField>
        <Select
        label="Role"
        onChange={(e)=>{SetNewUserDetails({role: e.target.value})}}
        defaultValue=""
        >
        {roles.map((role) => {
          return <MenuItem key={role} value={role}>{role}</MenuItem>;
        })}

        </Select>
        <></>
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({username: e.target.value})}} label="Username"></TextField>
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({password: e.target.value})}} type="password" label="Password"></TextField>
        <FormGroup>
            <FormControlLabel control={<Checkbox checked={NewUserDetails.admin}/>} label="Make System Admin" />
        </FormGroup>
        <Button variant="outlined" onClick={CreateNewUser}>Create New User</Button>
        
    </Paper>
    </>
)
};
