/* eslint-disable no-lone-blocks */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */

import { Alert, Button, Grid, ListItemIcon, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import downlod from './image/book-read-library-study-solid-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg'
import  './SignUP.css';

import Checkbox from '@mui/material/Checkbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import backgroundImage from "./image/bg.jpg";
import Link from 'react-router-dom';


const SignUp = () => {
  const [inputs, setInput] = useState({
    sname: "",
    splace: "",
    sage: "",
    semail: "",
    scd: "",
    spno: "",
    spassword: "",
    cpassword: "",
   
  });
  const [open, setOpen] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleCheckboxChange = (event) => {
    setTermsAccepted(event.target.checked);
  };


  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((inputs) => ({ ...inputs, [name]: value }));
  }

  const readVal = () => {
    for (const key in inputs) {
      if (inputs.hasOwnProperty(key) &&  inputs[key].trim() === "") {
        setError(true);
        return;
      }
    }

    if (!termsAccepted) {
      setError(true);
      return;
    }


    if (inputs.spassword !== inputs.cpassword) {
      setPasswordError(true);
      return;
    }

    setError(false);
    setPasswordError(false);
    console.log("clicked");
    console.log("inputs:", inputs);

    axios.post("http://localhost:3002/create", inputs)
      .then((response) => {
        setSuccess(true);
      })
      .catch(err => console.log(err));
  }

  const handleClick = () => {
    setOpen(!open);
  };

  const handleAlertClose = () => {
    setSuccess(false);
  };

  return (
    <div style={{ paddingTop: "100px", paddingBottom: "100px", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${backgroundImage})`, height: '100%', width: "100%" }} className='signup'>

      <div className='form' style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', width: '60%', marginLeft: '22%', height: '75%', borderRadius: '20px',paddingBottom:"100px",paddingTop:"50px" }}>
        <img src={downlod} alt="Logo" style={{ borderRadius: '50%', width: '80px', height: '80px' }} />

        <Typography style={{ fontStyle: 'italic' }} id='man'>All Fields are mandatory *</Typography><br />

        <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5.5%' }} spacing={1.5} columnGap={1}  >
          <Grid item xs={12} sm={6} sx={{ display: 'flex' }} >
            <TextField sx={{ margin: 1 }} variant='outlined' label='Name' type="text" autoComplete='given-name' name='sname' value={inputs.sname} onChange={inputHandler}></TextField>
            <TextField sx={{ margin: 1 }} variant='outlined' label='place' type="text" name='splace' value={inputs.splace} onChange={inputHandler}></TextField>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ display: 'flex' }} >
            <TextField sx={{ margin: 1 }} variant='outlined' label='Age' type='number' required name='sage' value={inputs.sage} onChange={inputHandler}></TextField>
            <TextField sx={{ margin: 1 }} variant='outlined' label='Email id' type="email" required name='semail' value={inputs.semail} onChange={inputHandler}></TextField>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ display: 'flex' }} >
            <TextField sx={{ margin: 1 }} variant='outlined' label='Contact details' type="text" required name='scd' value={inputs.scd} onChange={inputHandler}></TextField>
            <TextField sx={{ margin: 1 }} variant='outlined' label='Phone' type="tel" autoComplete="tel-country-code" required name='spno' value={inputs.spno} onChange={inputHandler}></TextField>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ display: 'flex' }} >
            <TextField sx={{ margin: 1 }} variant='outlined' label='Password' autoComplete='new-password' maxLength="8" type="password" required name='spassword' value={inputs.spassword} onChange={inputHandler}></TextField>
            <TextField sx={{ margin: 1 }} variant='outlined' label='Confirm Password' autoComplete='current-password' maxLength="8" type="password" required name='cpassword' value={inputs.cpassword} onChange={inputHandler}></TextField>
          </Grid>

        </Grid>
        <p> By accessing or using our services, you agree to abide by these terms and conditions. Please read them carefully before proceeding.</p>

        <ListItemButton onClick={handleClick} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ListItemIcon >Terms & Conditions</ListItemIcon>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Checkbox name='sterms'  checked={termsAccepted}
        onChange={handleCheckboxChange}></Checkbox> The App allows you to access library services, including searching for books
          </List>
        </Collapse>
        <br />
        {error && <Alert severity="error">Please fill in all fields.</Alert>}
        {passwordError && <Alert severity="error">Passwords do not match.</Alert>}
        {success && (
          <Alert severity="success" onClose={handleAlertClose}>
            Success! 
          </Alert>
        )}
        <Button class="signup-button" type="submit" onClick={readVal}>
          Sign Up
        </Button>

      </div>
    </div>
  )
}

export default SignUp;
