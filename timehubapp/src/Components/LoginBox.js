import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Axios from "axios"

export const LoginBox = () => {
  const [UsernameInput, SetUsername] = useState("");
  const [PasswordInput, SetPassword] = useState("");

  const [backendData, setBackendData] = useState("");
  

  const CheckLoginData =() => {
    console.log(UsernameInput,PasswordInput)
    Axios.post("http://localhost:8080/loginHashed", {username: UsernameInput,password:PasswordInput})
    .then((response) => {
      setBackendData(response)
      console.log(response.body.result)
    })
  }



  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "30vh",
          margin: "auto",
          padding: "10vh",
          backgroundColor: "white",
        }}
      >
        <TextField
          onChange={(e) => {
            SetUsername(e.target.value);
          }}
          id="usernameInput"
          label="Username"
          variant="outlined"
        />
        <TextField
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
          id="passwordInput"
          label="Password"
          type="password"
          variant="outlined"
        />
        <Button onClick={CheckLoginData}>Login</Button>
        
      </Box>
    </>
  );
};
