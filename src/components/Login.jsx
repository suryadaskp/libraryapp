import React, { useState } from 'react';
import { Alert, Button, TextField, Typography,  } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [inputs, setInput] = useState({
    semail: '',
    spassword: '',
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailerror, setEmailerror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((inputs) => ({ ...inputs, [name]: value }));
  };

  const readVal = () => {
    if (inputs.semail.trim() === '' || inputs.spassword.trim() === '') {
      setError(true);
      setEmailerror(false);
      setPassworderror(false);
      setSuccess(false);
      return;
    }

    console.log('clicked');
    console.log('inputs:', inputs);

    axios
      .post('http://localhost:3002/Login', inputs)
      .then((response) => {
        setError(false);


        if (response.data === 'Email not found.'|| response.data === 'Invalid password.') {
          
          setEmailerror(true);
          setPassworderror(true);
        } else {
          setEmailerror(false);
          setPassworderror(false);
          setSuccess(true);
           setError(false);
        }
       
   
    




        if (response.data === 'Email not found.') {
          console.log('response:', response.data);
          setEmailerror(true);
          setPassworderror(false);
          setSuccess(false);
        } else if (response.data === 'Invalid password.') {
          console.log('response:', response.data);
          setEmailerror(false);
          setPassworderror(true);
          setSuccess(false);
        } else {
          setEmailerror(false);
          setPassworderror(false);
          setSuccess(true);
          setError(false);
          console.log('response:', response.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleAlertClose = () => {
    setSuccess(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '50%', marginLeft: '25%', paddingTop: '100px' }}>
      <div
        style={{
          paddingTop: '100px',
          paddingBottom: '100px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          border: '2px solid gray',
          borderRadius: '4px',
          borderWidth: '2px',
        }}
      >
        <Typography style={{ fontSize: '60px', color: '' }}>Login </Typography>
        <br />

        <TextField
          sx={{ margin: 1 }}
          variant="outlined"
          label="Email id"
          type="email"
          required
          name="semail"
          value={inputs.semail}
          onChange={inputHandler}
        />
        <br />
        <TextField
          sx={{ margin: 1 }}
          variant="outlined"
          label="Password"
          type="password"
          required
          name="spassword"
          value={inputs.spassword}
          onChange={inputHandler}
        />
        <br />
        <br />
        {error && <Alert severity="error">Please fill in all fields.</Alert>}
        {emailerror && <Alert severity="error">Email not Found!</Alert>}
        {passworderror && <Alert severity="error">Invalid Password</Alert>}
        {success && (
          <Alert severity="success" onClose={handleAlertClose}>
            Success!
          </Alert>
        )}<br/>
        <Button className="signup-button" type="submit" variant="contained" onClick={readVal}>
          Login
        </Button>
        <br />
        <br />
        <Typography>You Don't have an Account?</Typography>
        <Link to={'/signup'}>Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;


