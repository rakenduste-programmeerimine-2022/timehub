import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { response } from "express";

const NewUserForm = (props) => {
  //sendData

  //Lets do it the painful way for now
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

  const SendNewUser = async()=>{
    if(
        NewUserDetails.username == "" ||
        NewUserDetails.password == "" ||
        NewUserDetails.fname == "" ||
        NewUserDetails.lname == "" ||
        NewUserDetails.phone == "" ||
        NewUserDetails.email == "" ||
        NewUserDetails.role == ""
    ){
        window.alert("Please fill all fields")
    }else{
        await axios.post("http://localhost:8080/users/new",{NewUserDetails})
        .then((response) =>{
            switch(response.status){
                case 200:
                    window.alert("Success");
                    break
                case 500:
                    window.alert("Serverside Error");
                    break
                case 7822:
                    window.alert("Username already exists")
                    break;
                default:
                    window.alert("Something went wrong")
            }
            
        })
    }
  }

  return (
    <>
      <Paper sx={{ padding: 2, backgroundColor: "rgba(0,0,0,0.05)" }}>
        <Box>
          <Typography>Is this workign- {NewUserDetails.admin}</Typography>
          <Typography>Profile Info</Typography>
          <TextField
            onChange={(e) => {
              SetNewUserDetails({ fname: e.target.value });
            }}
            required
            variant="outlined"
            label="First Name"
          ></TextField>
          <TextField
            onChange={(e) => {
              SetNewUserDetails({ lname: e.target.value });
            }}
            required="true"
            variant="outlined"
            label="Last Name"
          ></TextField>
        </Box>
        <Box>
          <Typography>Contact Details</Typography>
          <TextField
            onChange={(e) => {
              SetNewUserDetails({ phone: e.target.value });
            }}
            required
            variant="outlined"
            label="Phone"
          ></TextField>
          <TextField
            onChange={(e) => {
              SetNewUserDetails({ email: e.target.value });
            }}
            required
            variant="outlined"
            label="Email"
          ></TextField>
        </Box>
        <Box>
          <Typography>WorkDetails</Typography>
          <TextField
            onChange={(e) => {
              SetNewUserDetails({ position: e.target.value });
            }}
            required
            type="number"
            variant="outlined"
            label="Position"
          ></TextField>
          <InputLabel>Role</InputLabel>
          <Select
            autoWidth
            onChange={(e) => {
              SetNewUserDetails({ role: e.target.value });
            }}
            label="Role"
            //onChange={handleChange}
          >
            {roles.map((role) => {
              return <MenuItem value={role}>{role}</MenuItem>;
            })}
          </Select>
        </Box>
        <Box>
          <Typography>Account Details</Typography>
          <TextField
            onChange={(e) => {
              SetNewUserDetails({ username: e.target.value });
            }}
            required
            variant="outlined"
            label="Username"
          ></TextField>
          <TextField
            onChange={(e) => {
              SetNewUserDetails({ password: e.target.value });
            }}
            required
            variant="outlined"
            label="Password"
            type="password"
          ></TextField>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  SetNewUserDetails({ admin: e.target.value });
                }}
                color="success"
              ></Checkbox>
            }
            label="Admin"
          />
        </Box>
        <Button variant="outlined" onClick={SendNewUser}>Create New User</Button>
      </Paper>
    </>
  );
};

NewUserForm.propTypes = {};

export default NewUserForm;
