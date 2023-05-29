import React from 'react'
import { Button,Toolbar,AppBar,Box,Typography,IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
             <MenuIcon />
            <Menu id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade} >
         <Link to={'/d1'} style={{color:"black",textDecoration:"none"}}><MenuItem onClick={handleClose}>My profile</MenuItem></Link> 
         <Link to={'/d2'}style={{color:"black",textDecoration:"none"}}><MenuItem onClick={handleClose}>Book info</MenuItem></Link>
         <Link to={'/d3'}style={{color:"black",textDecoration:"none"}}><MenuItem onClick={handleClose}>Users info</MenuItem></Link>
      </Menu>
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>DASHBOARD</Typography>
          <Button color="error" size='small' variant="outlined" color="error">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar;