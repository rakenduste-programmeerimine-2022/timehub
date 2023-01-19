import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const pages = ["users","profile"]
//Profile needs to be remade or made different, as there is no /profile rn.


export const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/main"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: '"Segoe UI"',
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none"
            }}
          >
            TimeHub
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/main"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: '"Segoe UI"',
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none"
            }}
          >
            TimeHub
          </Typography>
          <Box sx={{ flexGrow: 0,justifyContent:"flex-end", display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={"/main/"+page}>
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block", padding:"10px" }}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
