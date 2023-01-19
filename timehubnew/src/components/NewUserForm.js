import { Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Paper, Select, TextField } from "@mui/material";
import axios from "axios";
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

  const CreateNewUser = () => {
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
    }else{
        SendData()
    }
  }

  const SendData = async ()=>{
    await axios.post("http://localhost:8080/users/new",NewUserDetails)
    .then((response)=>{
        if(response.body.answer == "success"){
            window.alert("User added")
        }
        console.log("Items Sent")
    })
    .catch((err)=>{
        window.alert("Something went wrong")
    })
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
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({...NewUserDetails, fname: e.target.value})}} label="First Name"></TextField>
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({...NewUserDetails,lname: e.target.value})}} label="Last Name"></TextField>
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({...NewUserDetails,phone: e.target.value})}} label="Phone"></TextField>
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({...NewUserDetails,email: e.target.value})}} label="Email"></TextField>
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({...NewUserDetails,position: e.target.value})}} label="Position" type="number"></TextField>
        <Select
        label="Role"
        onChange={(e)=>{SetNewUserDetails({...NewUserDetails,role: e.target.value})}}
        defaultValue=""
        >
        {roles.map((role) => {
          return <MenuItem key={role} value={role}>{role}</MenuItem>;
        })}

        </Select>
        <></>
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({...NewUserDetails,username: e.target.value})}} label="Username"></TextField>
        <TextField variant="filled" onChange={(e)=>{SetNewUserDetails({...NewUserDetails,password: e.target.value})}} type="password" label="Password"></TextField>
        <FormGroup>
            <FormControlLabel control={<Checkbox checked={NewUserDetails.admin} onChange={(e)=>{SetNewUserDetails({...NewUserDetails,admin:e.target.value})}} inputProps={{"aria-label":"controlled"}} />} label="Make System Admin" />
        </FormGroup>
        <Button variant="outlined" onClick={CreateNewUser}>Create New User</Button>
        
    </Paper>
    </>
)
};
