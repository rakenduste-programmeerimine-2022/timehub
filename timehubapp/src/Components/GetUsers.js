import React from 'react'
import PropTypes from 'prop-types'
import { Box } from "@mui/system"
import Axios from "axios"
import { Typography } from '@mui/material'


export default async function  GetUserList(){
    await Axios.get("http://localhost:8080/users").then((response)=>{
        console.log(response)
        const userList = response
          return <p>hello</p>
    })
  }

  //All of this not working. seek redoing. List revieved fine. 

  //Try to load all users on button press.