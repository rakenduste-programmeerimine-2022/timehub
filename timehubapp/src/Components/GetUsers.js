import { Box, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const GetUsers = () => {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/users")
    .then(res =>{
      console.log(res)
      setUsers(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])


  return (
    <Box>
        <Typography>Users here</Typography>
        <div>
        {users.map(user => <Box sx={{ display:"flex",padding:"5vh"}}>
          <Link to={"/main/user/"+user.id}><Typography variant='h5' key={user.id}>{user.fname} {user.lname}</Typography></Link>
          <Typography variant="h6">{user.role}</Typography>
        </Box>)}
        </div>
    </Box>
  )
}
