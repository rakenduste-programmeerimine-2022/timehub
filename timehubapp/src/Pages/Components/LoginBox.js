import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Button, TextField } from '@mui/material';


export const LoginBox = () => {
  return (
    <><Box 
    sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "35%",
        margin: "auto",
        padding: "10px",
        backgroundColor: "white"
    }}>
        <TextField id="usernameInput" label="Username" variant="outlined" />
        <TextField id="passwordInput" label="Password" variant="outlined" />
        <Button>Login</Button>
    </Box>
    </>

  )
}
