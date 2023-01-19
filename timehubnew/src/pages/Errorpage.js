import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography } from '@mui/material'

const Errorpage = props => {
  return (
    <Paper
    sx={{
        display:"flex",
        flexDirection:"column",
        flexGrow:1,
        margin:"auto",
        marginTop:"10vh",
        paddingTop:"5vh",
        alignItems:"center",
        height:"25vh",
        width:"50vh",
        position:"center",
        backgroundColor: "rgba(255, 108, 192, 0.8)"
    }}>
        <Typography>Oops, missing this page</Typography>
        <Typography>Looking for home?</Typography>
    </Paper>
  )
}

Errorpage.propTypes = {}

export default Errorpage