import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

export const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target) {
      const targetElement = event.target as HTMLElement
      const route = targetElement.getAttribute('data-valuetext')
      if (route) {
        navigate(route)
      }
    }
    setAnchorEl(null)
  }

  return (
    <Container
      component={'nav'}
      maxWidth="md"
      sx={{ width: '100%', border: '1px dotted black' }}
    >
      <Link to={'/'}>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Survee
        </Typography>
      </Link>
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        sx={{ float: 'right' }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} data-valuetext="/settings">
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose} data-valuetext="/about">
          About
        </MenuItem>
      </Menu>
    </Container>
  )
}
