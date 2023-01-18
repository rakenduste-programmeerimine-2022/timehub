import React from 'react'
import PropTypes from 'prop-types'
import { Box } from "@mui/system"
import Axios from "axios"

const Users = props => {
  const GetUserList = () =>{
    Axios.get("http://localhost:8080/users").then((response)=>{
        console.log(response)
        const userList = response
    })


}
  return (
    <Box>
      <GetUserList></GetUserList>

    </Box>
  )
}

Users.propTypes = {}

export default Users