import React, { useState } from 'react';
import { TextField,Button,Box, Typography,Alert} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';



const AdminLogin = () => {


  const [inputs, setInput] = useState({
    username: '',
    password: '',
  });


  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const[usererror,setUsererror] = useState(false);
  


  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((inputs) => ({ ...inputs, [name]: value }));
  };

  const readVal = () => {
    if (inputs.username.trim() === '' || inputs.password.trim() === '') {
      setError(true)
    
      setUsererror(false)
      setSuccess(false)
      return;
    }
  

    console.log('clicked');
    console.log('inputs:', inputs);

    axios
      .post('http://localhost:3002/AdminLogin', inputs)
      .then((response) => {
        setError(false);



       



       if(response.data==="Admin Logged in Successfully" )
       {
        setUsererror(false)
       
        setSuccess(true)
        setError(false)
        console.log("response:",response.data)
       }
       
      else{
        setSuccess(false)
        setError(false)
       
        setUsererror(true)
      }
      } 
      ).catch((err) => console.log(err));
    };
      



  return (
    <div align="center" style={{paddingTop:"15%"}}>
    <Box sx={{borderRadius:'1000px',border:'5px solid black',maxWidth:"340px",maxHeight:'700px',alignContent:"center",paddingBottom:"40px",paddingTop:"40px"}}>
        <Typography variant='h4'align='center'style={{fontFamily:"fantasy"}}>WELCOME</Typography>
        <div>
        <TextField helperText="Please enter your username" type='text' label="username" variant="outlined" size="small" name='username' value={inputs.username} onChange={inputHandler}  />
        </div>
        <div>
        <br/>
        <TextField  helperText="enter your password" type='password' label="password" variant="outlined" size="small" name='password' value={inputs.password}  onChange={inputHandler} />
        </div>
        <br/>
      
       <br/>
        <Link to={'/d1'} >
            <Button  style={{justifyContent:'center'}}variant="contained" color="success" onClick={readVal}>LOGIN</Button></Link>
        
        </Box>
        {error && <Alert severity="error">Please fill in all fields.</Alert>}
        {usererror && <Alert severity="error">Invalid Username or Password</Alert>}
     
        {success && <Alert severity="success">Successfully Logged In!</Alert>}
    </div>
  );
};

export default AdminLogin;
