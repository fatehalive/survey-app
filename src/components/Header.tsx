import React from 'react'
import { AppBar, Box, Toolbar } from '@mui/material'
import { Navbar } from './Navbar'

export const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Navbar />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
