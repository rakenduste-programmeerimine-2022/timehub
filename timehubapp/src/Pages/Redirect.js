import { Typography } from '@mui/material'
import React from 'react'


var loggedIn = false

export const Redirect = () => {
  if(loggedIn){
    return //redirect
  }
  else{
    return <Typography>Looking for LogIn?</Typography>
  }
}
