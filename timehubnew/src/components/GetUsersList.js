import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Paper, Typography } from '@mui/material'
//CURRENTLY RETURNS AN EMPTY ARRAY. GONNA CHECK LATER


const GetUsersList = () => {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/users")
    .then(res =>{
      setUsers(res.data)
      console.log(users)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])


  return(
    <div>
        {users.map((user)=>{
            <Link to={"/main/user/"+user.id}>
                <Paper
                sx={{
                    height:"20vh",
                    width:"50vh"
                }}>
                    <Typography key={user.id}>{user.fname} {user.lname}</Typography>
                </Paper>
            </Link>
        })}
    </div>
  )
}


export default GetUsersList